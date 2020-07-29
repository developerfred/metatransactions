/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish, BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { PayingProxy } from "./PayingProxy";

export class PayingProxyFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _masterCopy: string,
    initializer: Arrayish,
    funder: string,
    paymentToken: string,
    payment: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<PayingProxy> {
    return super.deploy(
      _masterCopy,
      initializer,
      funder,
      paymentToken,
      payment,
      overrides
    ) as Promise<PayingProxy>;
  }
  getDeployTransaction(
    _masterCopy: string,
    initializer: Arrayish,
    funder: string,
    paymentToken: string,
    payment: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _masterCopy,
      initializer,
      funder,
      paymentToken,
      payment,
      overrides
    );
  }
  attach(address: string): PayingProxy {
    return super.attach(address) as PayingProxy;
  }
  connect(signer: Signer): PayingProxyFactory {
    return super.connect(signer) as PayingProxyFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayingProxy {
    return new Contract(address, _abi, signerOrProvider) as PayingProxy;
  }
}

const _abi = [
  {
    inputs: [
      {
        name: "_masterCopy",
        type: "address"
      },
      {
        name: "initializer",
        type: "bytes"
      },
      {
        name: "funder",
        type: "address"
      },
      {
        name: "paymentToken",
        type: "address"
      },
      {
        name: "payment",
        type: "uint256"
      }
    ],
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
  "0x608060405234801561001057600080fd5b50604051610437380380610437833981018060405260a081101561003357600080fd5b81516020830180519193928301929164010000000081111561005457600080fd5b8201602081018481111561006757600080fd5b815164010000000081118282018710171561008157600080fd5b5050602082015160408301516060909301519194509250848481600160a060020a03811615156100fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806104136024913960400191505060405180910390fd5b60008054600160a060020a031916600160a060020a03929092169190911781558151111561015757600160a060020a0360005416600080835160208501846127105a03f46040513d6000823e811515610153573d81fd5b5050505b5050600081111561025b57600160a060020a03821615156101f357604051600160a060020a0384169082156108fc029083906000818181858888f1935050505015156101ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806103c76026913960400191505060405180910390fd5b61025b565b61020482848361026560201b60201c565b151561025b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806103ed6026913960400191505060405180910390fd5b505050505061031a565b60408051600160a060020a03841660248201526044808201849052825180830390910181526064909101909152602081018051600160e060020a03167fa9059cbb000000000000000000000000000000000000000000000000000000001781528151600092918391829182896127105a03f16040513d81016040523d6000823e3d80156102fd5760208114610305576000945061030f565b82945061030f565b8151158315171594505b505050509392505050565b609f806103286000396000f3fe608060405273ffffffffffffffffffffffffffffffffffffffff600054167fa619486e0000000000000000000000000000000000000000000000000000000060003514156050578060005260206000f35b3660008037600080366000845af43d6000803e801515606e573d6000fd5b3d6000f3fea165627a7a723058206296e2d036ecf1d7014038c68fa2aa30a27532b2d0726b8e62a62e609493836a0029436f756c64206e6f74207061792073616665206372656174696f6e2077697468206574686572436f756c64206e6f74207061792073616665206372656174696f6e207769746820746f6b656e496e76616c6964206d617374657220636f707920616464726573732070726f7669646564";