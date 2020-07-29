# A Minimal Meta-Transaction Library

Ethereum transaction's intertwine the identity of who paid for the transaction (gas.payer) and who wants to execute a command (msg.sender). As a result, it is **not straight forward for Alice to pay the gas fee on behalf of Bob** who wants to execute a command in a smart contract. Until it is fixed at the platform level, then Alice and Bob must adopt a meta-transaction standard to support this functionality (e.g. transaction infrastructure as a service in a non-custodial manner).

There are two approaches:

- **Proxy contract:** Every user has a proxy contract and all transactions are sent via the proxy contract. It is compatible with all existing smart contracts.
- **\_msgSender():** All transactions are sent via a single UniverisalForwarder contract and the target contract must support the \_msgSender() standard. It preserves the user's signing key address as their identity.

Our meta-transaction library focuses on both approaches and we hope it benefits the community in the following way:

- **A Univerisal Forwarder**: Our RelayHub.sol can be used for the \_msgSender() standard.
- **Minimal wallet contract**: Our proxy contract only requires 67k gas to deploy & 26k gas per transaction. It is minimal code and supports batching transactions. Supports exotic replay protection for out of order-transactions (bitflip) and N concurrent transactions (multinonmce). 
- **GnosisSafe**: We have incorporated GnosisSafe and our library tracks the replay protection nonce such that it is meta-transaction friendly. It is an audited wallet contract that is increasingly widely used. 

**Our repository is a protocol and relay-independent approach** that any project can adopt. We hope it will make it easier for projects to tap into third party relayer APIs and to avoid re-implementing the wheel for reliable transaction infrastructure.

# Getting started

We assume you have set up your nodejs environment and you simply need to plug-in our library.

1. **Install**. You need to install the NPM pacakge:

```
npm i @anydotcrypto/metatransactions --save-dev
```

2. **Environment**. Decide which network and replay protection to use.

You will need to import both the ChainID and Replay Protection into your code:

```
import { ChainID, ReplayProtectionType } from "@anydotcrypto/metatransactions";
```

Our library currently supports MAINNET or ROPSTEN.

```
// Blockchain ID (Mainnet = 3)
ChainID.MAINNET;
ChainID.ROPSTEN;
```

Our library has three types of replay protection (and more in-depth information can be [found here](https://github.com/PISAresearch/metamask-comp)):

- **Nonce**: Same as Ethereum, it increments a nonce for every new transaction.
- **Multinonce:** There are multiple replace-by-nonce queues, so it supports up to N concurrent transactions at any time.
- **Bitflip:** There is no queue and all transactions are processed out of order (e.g. batch withdrawals).

To access the replay protection:

```
// ReplayProtection
ReplayProtectionType.NONCE // Single queue
ReplayProtectionType.MULTINONCE // N queues (default == 30 queues)
ReplayProtectionType.BITFLIP // Always out-of-order & concurrent
```

Both MultiNonce and Bitflip support concurrent & out-of-order transactions by default. If you want to guarantee that all transactions are processed in order, then just set `ReplayProtectionType.NONCE`.

3. **msg.sender solution**. Decide which solution to msg.sender you want to use.

While we support both the RelayHub and the ProxyContract in this library, we recommend the proxy account contract approach for most purposes as it works for all existing smart contracts.

If you want to learn more, check out [Proxy Account Contracts vs the RelayHub](https://github.com/anydotcrypto/metatransactions#proxyaccount-vs-relayhub).

For the rest of the documentation, we only consider the proxy contract approach.

4. **Instantiate**. Let's create the meta-transaction library with your preferred options!

To instantiate the proxy account forwarder:

```
const signer = Wallet.Mnemonic("");
const forwarder = await new ProxyAccountForwarderFactory().createNew(
    ChainID.ROPSTEN,
    ReplayProtectionType.MULTINONCE,
    signer
 );
```

The forwarder links the signer's wallet to their proxy account contract.

Important: Our library can authorise a meta-transaction if the proxy account contract does not yet exist (e.g. not deployed). Using the [MultiSend](https://github.com/anydotcrypto/metatransactions/blob/master/src/contracts/ops/MultiSend.sol) contract, it is possible to meta-deploy the proxy contract and then execute the first meta-transaction in a single Ethereum Transaction. So there is no waiting/setup process.

# You are now ready to authorise a meta-transaction!

We will show how to authorise a meta-transaction using a proxy account contract or the relay hub.

## Example Echo Contract

The [Echo smart contract](https://github.com/anydotcrypto/metatransactions/blob/master/src/contracts/ops/Echo.sol) is used for our example:

```
pragma solidity ^0.6.2;
contract Echo {
    event Broadcast(address signer, string message);
    function submit(string memory _message) public
    {
        emit Broadcast(msg.sender, _message);
    }
}
```

## How to use the Proxy Account contract

The [full example](https://github.com/anydotcrypto/metatransactions/blob/master/example/proxyaccount/echo.ts) is available and it covers:

- Checking the proxy contract exists before deploying it.
- Deploying the Echo Contract via the proxy contract
- Sending a meta-transaction to the Echo Contract via the proxy contract.

Let's set up our forwarder and signer:

```
const user = Wallet.Mnemonic("");
const relayer = Wallet.Mnemonic("");
const forwarder = await new ProxyAccountForwarderFactory().createNew(
    ChainID.ROPSTEN,
    ReplayProtectionType.MULTINONCE,
    user
);
```

We can deploy the proxy account contract.

```
const isProxyDeployed = await forwarder.isContractDeployed();
if (!isProxyDeployed) {
    const minimalTx = await forwarder.createProxyContract();

    // For our example we mimic the relayer API with a relayer wallet.
    const proxyTx = await relayer.sendTransaction({
      to: minimalTx.to,
      data: minimalTx.data,
    });

    // Wait 1 block confirmation
    const proxyReceipt = await proxyTx.wait(1);
}
```

Supply the following information:

- **To** contract's address (required)
- **Data** the function name and its arguments (required)
- **Value** to be sent (in wei) - (optional)

Once you have settled on the message to echo, you can use this code sample to authorise the meta-transaction:

```
// Fetch the contract and the data.
const echo = new EchoFactory(user).attach("");
const data = echo.interface.functions.submit.encode(["hello"]);

// Sign the meta transaction & encode it.
const metaTx = await forwarder.signMetaTransaction({
    to: echo.address,
    value: "0",
    data: data,
});

const submitTicketTx = await relayer.sendTransaction({
    to: metaTx.to,
    data: metaTx.data,
});

const submitTicketReceipt = await submitTicketTx.wait(1);
```

Easy right? You have just deployed the proxy account contract and sent a meta-transaction via the proxy account contract. Our library has taken care of the replay protection & constructing the transaction data for you.

Well done!

# Proxy Account Contract Functionality

We take this opportunity to cover each function in the library.

## Instantiate the forwarder

You can use the factory to set up a new forwarder. It requires you to select the ChainID and the ReplayProtectionType. Note if you select MULTINONCE, then it generates 30 nonce queues by default. (e.g. up to 30 concurrent transactions at any single time).

```
  const proxyAccount = await new ProxyAccountForwarderFactory().createNew(
    ChainID.ROPSTEN,
    ReplayProtectionType.BITFLIP,
    user
  );
```

## Properties

Once you have instantiated the forwarder, then you can access the following properties:

```
const proxyAccountAddress = proxyAccount.address;
const signer = proxyAccount.signer;
```

Thanks to the ProxyDeployer, there is a one-to-one mapping for a signer's key and the proxy account contract address. The library will automatically compute the address and make it available via `proxyAccount.address`. Furthermore, the `Signer` is accessible via `proxyAccount.signer`.

## Deploying the Proxy Contract

There are two helper functions:

```
const isProxyDeployed = await proxyAccount.isContractDeployed();
const minimalTx = await proxyAccount.createProxyContract();
```

The former lets you check if the proxy contract is already deployed. The latter prepares a meta-transaction that can be packed into an Ethereum Transaction to deploy the proxy contract. Note the `MinimalTx` only contains the fields `to, data`.

## Authorising a meta-transaction.

There is a single function for authorising a meta-transaction:

```
const echoAddress = "0x...";
const data = echoContract.interface.functions.sendMessage.encode([
  "any.sender is nice",
]);
const metaTx = await proxyAccount.signMetaTransaction({
  to: echoAddress,
  data: data,
  value: "0"
});
```

It returns a `MinimalTx` that only contains the fields `to, data` which can be packed into an Ethereum Transaction. This takes care of preparing the replay protection & wrapping the call so it can be processed by the proxy account contract.

Note there is an additional `callType` field that can be used to decide if it is a `call` or a `delegatecall`. We only discuss call and advanced users can look at the contract on how to use delegatecall.

## Authorising a meta-deployment.

To deploy use the signMetaTransaction function but replace the `to` argument with a `salt`:

```
const initCode = new EchoFactory(user).getDeployTransaction().data!;
const value = "0";
const salt = "0x123";
const metaDeploy = await proxyAccount.signMetaTransaction({
  initCode,
  value,
  salt
});
```

The `signAndEncodeMetaDeployment` function prepares a `MinimalTx` for the deployment. Again it only contains a `to,value,data` that can be packed in the Ethereum Transaction. In reality, it is using `delegatecall` from the proxy contract into a global deployer contract and then deploy the smart contract.

The `buildDeployedContractAddress` computes the address for the contract. It just requires the `initCode` and the `salt` used for the deployment.

## Send a batch of meta-transactions

You need to prepare a list of transactions to use in the batch:

```
const metaTxList = [{
  to: msgSenderCon.address,
  value: 0,
  data: data,
  revertOnFail: true,
},
{
  data: initCode,
  salt: "v0.1",
  value: 0
},
{
  to: echoCon.address,
  value: 0,
  data: data,
  revertOnFail: false,
}];
```

An additional feature is `revertOnFail` which lets you decide if the entire batch of transactions should revert if the meta-transaction fails. Again, we omit `CallType` as it should only be used by advanced users and 99% of meta-transactions only require the `.call` functionality.

Now you can batch the transactions:
```
const minimalTx = await forwarder.signMetaTransaction(metaTxList);
```

The `MinimalTx` contains the fields `to, data` that can be packed into an Ethereum Transaction. Each meta-transaction is processed in order by the proxy account contract.

## Decoding a metatransaction

You can decode a metatransaction into it's consutituent parts by using the decodeTx or decodeBatchTx functions.

For a single tx:
```
const echoAddress = "0x...";
const data = echoContract.interface.functions.sendMessage.encode([
  "any.sender is nice",
]);
const metaTx = await proxyAccount.signMetaTransaction({
  to: echoAddress,
  data: data,
  value: "0"
});
const forwardFunctionArguments = proxyAccount.decodeTx(metaTx.data);
```

Or for a batch tx:
```
const echoAddress = "0x...";
const data = echoContract.interface.functions.sendMessage.encode([
  "any.sender is nice",
]);
const metaTx = await proxyAccount.signMetaTransaction([{
  to: echoAddress,
  data: data,
  value: "0"
}]);
const forwardFunctionArguments = proxyAccount.decodeBatchTx(metaTx.data);
```