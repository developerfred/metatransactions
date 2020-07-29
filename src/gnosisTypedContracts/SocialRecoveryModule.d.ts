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

interface SocialRecoveryModuleInterface extends Interface {
  functions: {
    threshold: TypedFunctionDescription<{ encode([]: []): string }>;

    manager: TypedFunctionDescription<{ encode([]: []): string }>;

    setup: TypedFunctionDescription<{
      encode([_friends, _threshold]: [string[], BigNumberish]): string;
    }>;

    isFriend: TypedFunctionDescription<{ encode([]: [string]): string }>;

    recoverAccess: TypedFunctionDescription<{
      encode([prevOwner, oldOwner, newOwner]: [string, string, string]): string;
    }>;

    confirmTransaction: TypedFunctionDescription<{
      encode([dataHash]: [Arrayish]): string;
    }>;

    changeMasterCopy: TypedFunctionDescription<{
      encode([_masterCopy]: [string]): string;
    }>;

    isConfirmedByRequiredFriends: TypedFunctionDescription<{
      encode([dataHash]: [Arrayish]): string;
    }>;

    NAME: TypedFunctionDescription<{ encode([]: []): string }>;

    getDataHash: TypedFunctionDescription<{
      encode([data]: [Arrayish]): string;
    }>;

    isConfirmed: TypedFunctionDescription<{
      encode([,]: [Arrayish, string]): string;
    }>;

    friends: TypedFunctionDescription<{ encode([]: [BigNumberish]): string }>;

    isExecuted: TypedFunctionDescription<{ encode([]: [Arrayish]): string }>;

    VERSION: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    ChangedMasterCopy: TypedEventDescription<{
      encodeTopics([masterCopy]: [null]): string[];
    }>;
  };
}

export class SocialRecoveryModule extends Contract {
  connect(signerOrProvider: Signer | Provider | string): SocialRecoveryModule;
  attach(addressOrName: string): SocialRecoveryModule;
  deployed(): Promise<SocialRecoveryModule>;

  on(event: EventFilter | string, listener: Listener): SocialRecoveryModule;
  once(event: EventFilter | string, listener: Listener): SocialRecoveryModule;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): SocialRecoveryModule;
  removeAllListeners(eventName: EventFilter | string): SocialRecoveryModule;
  removeListener(eventName: any, listener: Listener): SocialRecoveryModule;

  interface: SocialRecoveryModuleInterface;

  functions: {
    threshold(): Promise<BigNumber>;

    manager(): Promise<string>;

    setup(
      _friends: string[],
      _threshold: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isFriend(arg0: string): Promise<boolean>;

    recoverAccess(
      prevOwner: string,
      oldOwner: string,
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    confirmTransaction(
      dataHash: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    isConfirmedByRequiredFriends(dataHash: Arrayish): Promise<boolean>;

    NAME(): Promise<string>;

    getDataHash(data: Arrayish): Promise<string>;

    isConfirmed(arg0: Arrayish, arg1: string): Promise<boolean>;

    friends(arg0: BigNumberish): Promise<string>;

    isExecuted(arg0: Arrayish): Promise<boolean>;

    VERSION(): Promise<string>;
  };

  threshold(): Promise<BigNumber>;

  manager(): Promise<string>;

  setup(
    _friends: string[],
    _threshold: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isFriend(arg0: string): Promise<boolean>;

  recoverAccess(
    prevOwner: string,
    oldOwner: string,
    newOwner: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  confirmTransaction(
    dataHash: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  changeMasterCopy(
    _masterCopy: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  isConfirmedByRequiredFriends(dataHash: Arrayish): Promise<boolean>;

  NAME(): Promise<string>;

  getDataHash(data: Arrayish): Promise<string>;

  isConfirmed(arg0: Arrayish, arg1: string): Promise<boolean>;

  friends(arg0: BigNumberish): Promise<string>;

  isExecuted(arg0: Arrayish): Promise<boolean>;

  VERSION(): Promise<string>;

  filters: {
    ChangedMasterCopy(masterCopy: null): EventFilter;
  };

  estimate: {
    threshold(): Promise<BigNumber>;

    manager(): Promise<BigNumber>;

    setup(_friends: string[], _threshold: BigNumberish): Promise<BigNumber>;

    isFriend(arg0: string): Promise<BigNumber>;

    recoverAccess(
      prevOwner: string,
      oldOwner: string,
      newOwner: string
    ): Promise<BigNumber>;

    confirmTransaction(dataHash: Arrayish): Promise<BigNumber>;

    changeMasterCopy(_masterCopy: string): Promise<BigNumber>;

    isConfirmedByRequiredFriends(dataHash: Arrayish): Promise<BigNumber>;

    NAME(): Promise<BigNumber>;

    getDataHash(data: Arrayish): Promise<BigNumber>;

    isConfirmed(arg0: Arrayish, arg1: string): Promise<BigNumber>;

    friends(arg0: BigNumberish): Promise<BigNumber>;

    isExecuted(arg0: Arrayish): Promise<BigNumber>;

    VERSION(): Promise<BigNumber>;
  };
}