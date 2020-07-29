/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { MockContract } from "./MockContract";

export class MockContractFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<MockContract> {
    return super.deploy(overrides) as Promise<MockContract>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): MockContract {
    return super.attach(address) as MockContract;
  }
  connect(signer: Signer): MockContractFactory {
    return super.connect(signer) as MockContractFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockContract {
    return new Contract(address, _abi, signerOrProvider) as MockContract;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "invocationCount",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "DEFAULT_FALLBACK_VALUE",
    outputs: [
      {
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      }
    ],
    name: "givenCalldataRunOutOfGas",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "MOCKS_LIST_END_HASH",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "response",
        type: "bool"
      }
    ],
    name: "givenAnyReturnBool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "givenAnyRunOutOfGas",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      }
    ],
    name: "invocationCountForMethod",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      }
    ],
    name: "invocationCountForCalldata",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "methodId",
        type: "bytes4"
      },
      {
        name: "originalMsgData",
        type: "bytes"
      }
    ],
    name: "updateInvocationCount",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "bool"
      }
    ],
    name: "givenCalldataReturnBool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "bytes"
      }
    ],
    name: "givenCalldataReturn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "MOCKS_LIST_START",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "response",
        type: "address"
      }
    ],
    name: "givenAnyReturnAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      }
    ],
    name: "givenMethodRunOutOfGas",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "bool"
      }
    ],
    name: "givenMethodReturnBool",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "MOCKS_LIST_END",
    outputs: [
      {
        name: "",
        type: "bytes"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "message",
        type: "string"
      }
    ],
    name: "givenAnyRevertWithMessage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "message",
        type: "string"
      }
    ],
    name: "givenMethodRevertWithMessage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "message",
        type: "string"
      }
    ],
    name: "givenCalldataRevertWithMessage",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      }
    ],
    name: "givenMethodRevert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "response",
        type: "uint256"
      }
    ],
    name: "givenAnyReturnUint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "address"
      }
    ],
    name: "givenCalldataReturnAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "bytes"
      }
    ],
    name: "givenMethodReturn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "address"
      }
    ],
    name: "givenMethodReturnAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "response",
        type: "bytes"
      }
    ],
    name: "givenAnyReturn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "uint256"
      }
    ],
    name: "givenCalldataReturnUint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "reset",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [],
    name: "givenAnyRevert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      }
    ],
    name: "givenCalldataRevert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "SENTINEL_ANY_MOCKS",
    outputs: [
      {
        name: "",
        type: "bytes4"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "call",
        type: "bytes"
      },
      {
        name: "response",
        type: "uint256"
      }
    ],
    name: "givenMethodReturnUint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback"
  }
];

const _bytecode =
  "0x600060a09081526020608081905260c06040526200002091600b916200011f565b503480156200002e57600080fd5b5060408051808201909152600481527f307866660000000000000000000000000000000000000000000000000000000060208083019182527f0100000000000000000000000000000000000000000000000000000000000000600090815290529051620000bd917f82ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bc916200011f565b507f010000000000000000000000000000000000000000000000000000000000000060005260056020527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a805463ffffffff19166301000000179055620001c4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200016257805160ff191683800117855562000192565b8280016001018555821562000192579182015b828111156200019257825182559160200191906001019062000175565b50620001a0929150620001a4565b5090565b620001c191905b80821115620001a05760008155600101620001ab565b90565b6129b380620001d46000396000f3fe6080604052600436106101d85760003560e01c80637cd96ee411610102578063cf11ff5d11610095578063e211b8a511610064578063e211b8a5146113b1578063eb861f69146113c6578063f07da22914611443578063f5afa9c114611475576101d8565b8063cf11ff5d1461120f578063d6fe9778146112a2578063d73ca0ac1461131f578063d826f88f1461139c576101d8565b8063aa788c55116100d1578063aa788c5514611006578063af21ac7814611083578063b3901f29146110ad578063c6ee167f14611140576101d8565b80637cd96ee414610dd657806387abab6514610deb5780639a1dc86b14610e685780639eaeed7514610f37576101d8565b8063586984a41161017a57806367aad04a1161014957806367aad04a14610c85578063682b479714610c9a57806368ab6f2f14610cda5780636f40075614610d57576101d8565b8063586984a4146109f657806358cbc02514610a735780635a3855ab14610b375780636193659414610bb6576101d8565b80632ed238dc116101b65780632ed238dc1461092357806336ff0ee5146109385780633956dc6b146109645780634937c4f614610979576101d8565b80630a20119f146107f3578063122aea811461081a57806321fed4d6146108a4575b60003560018060003660405180838380828437919091019485525050604051928390036020019092205460ff16915050600281111561021357fe5b14156102d8576003600036604051808383808284379190910194855250506040516020938190038401812060e560020a62461bcd028252600482019485528054600260018216156101000260001901909116046024830181905290949350839250604490910190849080156102c95780601f1061029e576101008083540402835291602001916102c9565b820191906000526020600020905b8154815290600101906020018083116102ac57829003601f168201915b50509250505060405180910390fd5b6002600160003660405180838380828437919091019485525050604051928390036020019092205460ff16915050600281111561031157fe5b141561031f5761031f6114f2565b60606002600036604051808383808284379190910194855250506040805160209481900385018120805460026001821615610100026000190190911604601f810187900487028301870190935282825290949093509091508301828280156103c85780601f1061039d576101008083540402835291602001916103c8565b820191906000526020600020905b8154815290600101906020018083116103ab57829003601f168201915b5050505050905080516000141561055f576001600160e060020a0319831660009081526006602052604090205460ff16600281111561040357fe5b141561048157600160e060020a03198216600090815260086020908152604091829020915160e560020a62461bcd0281526004810191825282546002600019610100600184161502019091160460248201819052829160440190849080156102c95780601f1061029e576101008083540402835291602001916102c9565b6002600160e060020a0319831660009081526006602052604090205460ff1660028111156104ab57fe5b14156104b9576104b96114f2565b600160e060020a0319821660009081526007602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156105575780601f1061052c57610100808354040283529160200191610557565b820191906000526020600020905b81548152906001019060200180831161053a57829003601f168201915b505050505090505b80511515610693576001600a5460ff16600281111561057a57fe5b14156105e45760405160e560020a62461bcd028152602060048201908152600c8054600260001961010060018416150201909116046024840181905290928291604490910190849080156102c95780601f1061029e576101008083540402835291602001916102c9565b6002600a5460ff1660028111156105f757fe5b1415610605576106056114f2565b600b805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561068b5780601f106106605761010080835404028352916020019161068b565b820191906000526020600020905b81548152906001019060200180831161066e57829003601f168201915b505050505090505b60408051600160e060020a03198416602482019081526044820192835236606483018190526060933093620186a0938893600093909260840184848082843760008382015260408051601f909201601f1990811690940182810390940182529283526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f58cbc0250000000000000000000000000000000000000000000000000000000017815292518151919850965086955091935090915081905083835b602083106107745780518252601f199092019160209182019101610755565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038160008787f1925050503d80600081146107d7576040519150601f19603f3d011682016040523d82523d6000602084013e6107dc565b606091505b5080519092501590506107eb57fe5b815182602001f35b3480156107ff57600080fd5b5061080861150e565b60408051918252519081900360200190f35b34801561082657600080fd5b5061082f611515565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610869578181015183820152602001610851565b50505050905090810190601f1680156108965780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108b057600080fd5b50610921600480360360208110156108c757600080fd5b8101906020810181356401000000008111156108e257600080fd5b8201836020820111156108f457600080fd5b8035906020019184600183028401116401000000008311171561091657600080fd5b509092509050611537565b005b34801561092f57600080fd5b506108086115be565b34801561094457600080fd5b506109216004803603602081101561095b57600080fd5b50351515611637565b34801561097057600080fd5b5061092161165e565b34801561098557600080fd5b506108086004803603602081101561099c57600080fd5b8101906020810181356401000000008111156109b757600080fd5b8201836020820111156109c957600080fd5b803590602001918460018302840111640100000000831117156109eb57600080fd5b50909250905061166d565b348015610a0257600080fd5b5061080860048036036020811015610a1957600080fd5b810190602081018135640100000000811115610a3457600080fd5b820183602082011115610a4657600080fd5b80359060200191846001830284011164010000000083111715610a6857600080fd5b5090925090506116fe565b348015610a7f57600080fd5b5061092160048036036040811015610a9657600080fd5b600160e060020a03198235169190810190604081016020820135640100000000811115610ac257600080fd5b820183602082011115610ad457600080fd5b80359060200191846001830284011164010000000083111715610af657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611755945050505050565b348015610b4357600080fd5b5061092160048036036040811015610b5a57600080fd5b810190602081018135640100000000811115610b7557600080fd5b820183602082011115610b8757600080fd5b80359060200191846001830284011164010000000083111715610ba957600080fd5b9193509150351515611886565b348015610bc257600080fd5b5061092160048036036040811015610bd957600080fd5b810190602081018135640100000000811115610bf457600080fd5b820183602082011115610c0657600080fd5b80359060200191846001830284011164010000000083111715610c2857600080fd5b919390929091602081019035640100000000811115610c4657600080fd5b820183602082011115610c5857600080fd5b80359060200191846001830284011164010000000083111715610c7a57600080fd5b5090925090506118ec565b348015610c9157600080fd5b5061080861195f565b348015610ca657600080fd5b5061092160048036036020811015610cbd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611967565b348015610ce657600080fd5b5061092160048036036020811015610cfd57600080fd5b810190602081018135640100000000811115610d1857600080fd5b820183602082011115610d2a57600080fd5b80359060200191846001830284011164010000000083111715610d4c57600080fd5b50909250905061198c565b348015610d6357600080fd5b5061092160048036036040811015610d7a57600080fd5b810190602081018135640100000000811115610d9557600080fd5b820183602082011115610da757600080fd5b80359060200191846001830284011164010000000083111715610dc957600080fd5b9193509150351515611a09565b348015610de257600080fd5b5061082f611a69565b348015610df757600080fd5b5061092160048036036020811015610e0e57600080fd5b810190602081018135640100000000811115610e2957600080fd5b820183602082011115610e3b57600080fd5b80359060200191846001830284011164010000000083111715610e5d57600080fd5b509092509050611a8a565b348015610e7457600080fd5b5061092160048036036040811015610e8b57600080fd5b810190602081018135640100000000811115610ea657600080fd5b820183602082011115610eb857600080fd5b80359060200191846001830284011164010000000083111715610eda57600080fd5b919390929091602081019035640100000000811115610ef857600080fd5b820183602082011115610f0a57600080fd5b80359060200191846001830284011164010000000083111715610f2c57600080fd5b509092509050611aa3565b348015610f4357600080fd5b5061092160048036036040811015610f5a57600080fd5b810190602081018135640100000000811115610f7557600080fd5b820183602082011115610f8757600080fd5b80359060200191846001830284011164010000000083111715610fa957600080fd5b919390929091602081019035640100000000811115610fc757600080fd5b820183602082011115610fd957600080fd5b80359060200191846001830284011164010000000083111715610ffb57600080fd5b509092509050611b31565b34801561101257600080fd5b506109216004803603602081101561102957600080fd5b81019060208101813564010000000081111561104457600080fd5b82018360208201111561105657600080fd5b8035906020019184600183028401116401000000008311171561107857600080fd5b509092509050611bea565b34801561108f57600080fd5b50610921600480360360208110156110a657600080fd5b5035611c57565b3480156110b957600080fd5b50610921600480360360408110156110d057600080fd5b8101906020810181356401000000008111156110eb57600080fd5b8201836020820111156110fd57600080fd5b8035906020019184600183028401116401000000008311171561111f57600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16611c63565b34801561114c57600080fd5b506109216004803603604081101561116357600080fd5b81019060208101813564010000000081111561117e57600080fd5b82018360208201111561119057600080fd5b803590602001918460018302840111640100000000831117156111b257600080fd5b9193909290916020810190356401000000008111156111d057600080fd5b8201836020820111156111e257600080fd5b8035906020019184600183028401116401000000008311171561120457600080fd5b509092509050611cbc565b34801561121b57600080fd5b506109216004803603604081101561123257600080fd5b81019060208101813564010000000081111561124d57600080fd5b82018360208201111561125f57600080fd5b8035906020019184600183028401116401000000008311171561128157600080fd5b91935091503573ffffffffffffffffffffffffffffffffffffffff16611d2f565b3480156112ae57600080fd5b50610921600480360360208110156112c557600080fd5b8101906020810181356401000000008111156112e057600080fd5b8201836020820111156112f257600080fd5b8035906020019184600183028401116401000000008311171561131457600080fd5b509092509050611d88565b34801561132b57600080fd5b506109216004803603604081101561134257600080fd5b81019060208101813564010000000081111561135d57600080fd5b82018360208201111561136f57600080fd5b8035906020019184600183028401116401000000008311171561139157600080fd5b919350915035611dc7565b3480156113a857600080fd5b50610921611e0c565b3480156113bd57600080fd5b5061092161235d565b3480156113d257600080fd5b50610921600480360360208110156113e957600080fd5b81019060208101813564010000000081111561140457600080fd5b82018360208201111561141657600080fd5b8035906020019184600183028401116401000000008311171561143857600080fd5b509092509050612388565b34801561144f57600080fd5b5061145861195f565b60408051600160e060020a03199092168252519081900360200190f35b34801561148157600080fd5b506109216004803603604081101561149857600080fd5b8101906020810181356401000000008111156114b357600080fd5b8201836020820111156114c557600080fd5b803590602001918460018302840111640100000000831117156114e757600080fd5b919350915035612456565b5b60006060600060c060008060066107d05a03f19050506114f3565b600d545b90565b6040805160006020808301919091528251808303909101815290820190915281565b6002600183836040518083838082843791909101948552505060405192839003602001909220805490925060ff19169050600183600281111561157657fe5b02179055506115ba82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061249b92505050565b5050565b604080518082018252600480825260e160020a63183c333302602083019081529251919282918083835b602083106116075780518252601f1990920191602091820191016115e8565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902081565b600081611645576000611648565b60015b60ff1690506115ba6116598261253a565b612564565b600a805460ff19166002179055565b6000806116af84848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061258192505050565b600e5460408051602080820193909352600160e060020a031990931683820152805160248185030181526044909301815282519282019290922060009081526009909152205491505092915050565b600060046000600e5485856040516020018084815260200183838082843780830192505050935050505060405160208183030381529060405280519060200120815260200190815260200160002054905092915050565b3330146117965760405160e560020a62461bcd02815260040180806020018281038252602b81526020018061293d602b913960400191505060405180910390fd5b600d80546001908101909155600e805460408051602080820193909352600160e060020a0319871681830152815160248183030181526044820183528051908401206000908152600984529182208054860190559254606484018181528651600495939492938893608490910191908401908083835b6020831061182b5780518252601f19909201916020918201910161180c565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052805190602001208152602001908152602001600020600082825401925050819055505050565b600081611894576000611897565b60015b60ff1690506118e684848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506118e1925085915061253a9050565b6125e6565b50505050565b6118e684848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f880181900481028201810190925286815292508691508590819084018382808284376000920191909152506125e692505050565b60f860020a81565b6119896116598273ffffffffffffffffffffffffffffffffffffffff1661253a565b50565b60006119cd83838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061258192505050565b600160e060020a031981166000908152600660205260409020805491925060029160ff19166001835b0217905550611a04816126e1565b505050565b600081611a17576000611a1a565b60015b60ff1690506118e684848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a64925085915061253a9050565b61276e565b604080518082019091526004815260e160020a63183c333302602082015281565b600a805460ff19166001179055611a04600c83836127c1565b6000611ae485858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061258192505050565b600160e060020a031981166000908152600660209081526040808320805460ff1916600117905560089091529020909150611b209084846127c1565b50611b2a816126e1565b5050505050565b60018085856040518083838082843791909101948552505060405192839003602001909220805490925060ff191690506001836002811115611b6f57fe5b021790555081816003868660405180838380828437808301925050509250505090815260200160405180910390209190611baa9291906127c1565b506118e684848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061249b92505050565b6000611c2b83838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061258192505050565b600160e060020a031981166000908152600660205260409020805491925060019160ff191682806119f6565b6119896116598261253a565b611a0483838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506118e19250505073ffffffffffffffffffffffffffffffffffffffff841661253a565b6118e684848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8801819004810282018101909252868152925086915085908190840183828082843760009201919091525061276e92505050565b611a0483838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a649250505073ffffffffffffffffffffffffffffffffffffffff841661253a565b6115ba82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061256492505050565b611a0483838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506118e1925085915061253a9050565b60f860020a6000908152602090815260008051602061296883398151915280546040805160026001841615610100026000190190931692909204601f8101859004850283018501909152808252606093919291830182828015611eb05780601f10611e8557610100808354040283529160200191611eb0565b820191906000526020600020905b815481529060010190602001808311611e9357829003601f168201915b5050835160208501209394505050505b604080518082018252600480825260e160020a63183c333302602083019081529251919282918083835b60208310611f095780518252601f199092019160209182019101611eea565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020811415156121975760006001836040518082805190602001908083835b60208310611f725780518252601f199092019160209182019101611f53565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220805490925060ff191690506001836002811115611fb657fe5b021790555060206040519081016040528060008152506002836040518082805190602001908083835b60208310611ffe5780518252601f199092019160209182019101611fdf565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161203f959194919091019250905061283f565b5060206040519081016040528060008152506003836040518082805190602001908083835b602083106120835780518252601f199092019160209182019101612064565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932084516120c4959194919091019250905061283f565b506000818152602081815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156121565780601f1061212b57610100808354040283529160200191612156565b820191906000526020600020905b81548152906001019060200180831161213957829003601f168201915b5050604080516020818101808452600080845289815291829052929020905195975061218995909450909250905061283f565b505080516020820120611ec0565b604080518082019091526004815260e160020a63183c333302602080830191825260f860020a6000908152905290516121df916000805160206129688339815191529161283f565b5060f860020a60005260056020527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a5460e01b5b600160e060020a0319811660f860020a146122d357600160e060020a031981166000818152600660209081526040808320805460ff191690558051808301808352848252948452600790925290912090518392612270929161283f565b506040805160208181018084526000808452600160e060020a031986168152600890925292902090516122a3929061283f565b50600160e060020a0319166000908152600560205260409020805463ffffffff19811690915560e01b9050612213565b60f860020a6000908152600560209081527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a805463ffffffff1916630100000017905560408051808301939093528051808403830181529281019052815161233f92600b92019061283f565b5050600a805460ff1916905550506000600d55600e80546001019055565b600a805460ff1916600117905560408051602081019182905260009081905261198991600c9161283f565b60018083836040518083838082843791909101948552505060405192839003602001909220805490925060ff1916905060018360028111156123c657fe5b02179055506020604051908101604052806000815250600383836040518083838082843780830192505050925050509081526020016040518091039020908051906020019061241692919061283f565b506115ba82828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061249b92505050565b611a0483838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611a64925085915061253a9050565b80516020808301919091206000818152918290526040909120546002600019610100600184161502019091160415156115ba576000602081905281815260409020600080516020612968833981519152805461250b929190600260001961010060018416150201909116046128ad565b5060f860020a600090815260209081528251611a0491600080516020612968833981519152919085019061283f565b60408051602080825281830190925260609160208201818038833950505060208101929092525090565b600a805460ff1916905580516115ba90600b90602084019061283f565b600080805b60048110156125df578060080284828151811015156125a157fe5b01602001517fff0000000000000000000000000000000000000000000000000000000000000060f891821c90911b16901c9190911790600101612586565b5092915050565b60006001836040518082805190602001908083835b6020831061261a5780518252601f1990920191602091820191016125fb565b51815160209384036101000a60001901801990921691161790529201948552506040519384900301909220805490925060ff19169050600183600281111561265e57fe5b0217905550806002836040518082805190602001908083835b602083106126965780518252601f199092019160209182019101612677565b51815160209384036101000a600019018019909216911617905292019485525060405193849003810190932084516126d7959194919091019250905061283f565b506115ba8261249b565b600160e060020a031980821660009081526005602052604090205460e01b1615156119895760056020527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a8054600160e060020a03198316600090815260408120805460e093841b841c63ffffffff199182161790915560f860020a90915282549184901c911617905550565b600061277983612581565b600160e060020a031981166000908152600660209081526040808320805460ff191690556007825290912084519293506127b792909185019061283f565b50611a04816126e1565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106128025782800160ff1982351617855561282f565b8280016001018555821561282f579182015b8281111561282f578235825591602001919060010190612814565b5061283b929150612922565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061288057805160ff191683800117855561282f565b8280016001018555821561282f579182015b8281111561282f578251825591602001919060010190612892565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106128e6578054855561282f565b8280016001018555821561282f57600052602060002091601f016020900482015b8281111561282f578254825591600101919060010190612907565b61151291905b8082111561283b576000815560010161292856fe43616e206f6e6c792062652063616c6c65642066726f6d2074686520636f6e747261637420697473656c6682ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bca165627a7a72305820192d0f000c4090b585520a91b0465021081a3ad4160c7a48ec757719af783eed0029";