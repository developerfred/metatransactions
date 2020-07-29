/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface CreateCallInterface extends Interface {
  functions: {
    performCreate2: TypedFunctionDescription<{
      encode([value, deploymentData, salt]: [
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;

    performCreate: TypedFunctionDescription<{
      encode([value, deploymentData]: [BigNumberish, Arrayish]): string;
    }>;
  };

  events: {
    ContractCreation: TypedEventDescription<{
      encodeTopics([newContract]: [null]): string[];
    }>;
  };
}

export class CreateCall extends Contract {
  connect(signerOrProvider: Signer | Provider | string): CreateCall;
  attach(addressOrName: string): CreateCall;
  deployed(): Promise<CreateCall>;

  on(event: EventFilter | string, listener: Listener): CreateCall;
  once(event: EventFilter | string, listener: Listener): CreateCall;
  addListener(eventName: EventFilter | string, listener: Listener): CreateCall;
  removeAllListeners(eventName: EventFilter | string): CreateCall;
  removeListener(eventName: any, listener: Listener): CreateCall;

  interface: CreateCallInterface;

  functions: {
    performCreate2(
      value: BigNumberish,
      deploymentData: Arrayish,
      salt: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    performCreate(
      value: BigNumberish,
      deploymentData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  performCreate2(
    value: BigNumberish,
    deploymentData: Arrayish,
    salt: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  performCreate(
    value: BigNumberish,
    deploymentData: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    ContractCreation(newContract: null): EventFilter;
  };

  estimate: {
    performCreate2(
      value: BigNumberish,
      deploymentData: Arrayish,
      salt: Arrayish
    ): Promise<BigNumber>;

    performCreate(
      value: BigNumberish,
      deploymentData: Arrayish
    ): Promise<BigNumber>;
  };
}