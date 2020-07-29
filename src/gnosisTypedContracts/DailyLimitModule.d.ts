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

interface DailyLimitModuleInterface extends Interface {
  functions: {
    setup: TypedFunctionDescription<{
      encode([tokens, _dailyLimits]: [string[], BigNumberish[]]): string;
    }>;

    manager: TypedFunctionDescription<{ encode([]: []): string }>;

    executeDailyLimit: TypedFunctionDescription<{
      encode([token, to, amount]: [string, string, BigNumberish]): string;
    }>;

    changeMasterCopy: TypedFunctionDescription<{
      encode([_masterCopy]: [string]): string;
    }>;

    changeDailyLimit: TypedFunctionDescription<{
      encode([token, dailyLimit]: [string, BigNumberish]): string;
    }>;

    NAME: TypedFunctionDescription<{ encode([]: []): string }>;

    today: TypedFunctionDescription<{ encode([]: []): string }>;

    dailyLimits: TypedFunctionDescription<{ encode([]: [string]): string }>;

    VERSION: TypedFunctionDescription<{ encode([]: []): string }>;
  };

  events: {
    ChangedMasterCopy: TypedEventDescription<{
      encodeTopics([masterCopy]: [null]): string[];
    }>;
  };
}

export class DailyLimitModule extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DailyLimitModule;
  attach(addressOrName: string): DailyLimitModule;
  deployed(): Promise<DailyLimitModule>;

  on(event: EventFilter | string, listener: Listener): DailyLimitModule;
  once(event: EventFilter | string, listener: Listener): DailyLimitModule;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DailyLimitModule;
  removeAllListeners(eventName: EventFilter | string): DailyLimitModule;
  removeListener(eventName: any, listener: Listener): DailyLimitModule;

  interface: DailyLimitModuleInterface;

  functions: {
    setup(
      tokens: string[],
      _dailyLimits: BigNumberish[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    manager(): Promise<string>;

    executeDailyLimit(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    changeMasterCopy(
      _masterCopy: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    changeDailyLimit(
      token: string,
      dailyLimit: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    NAME(): Promise<string>;

    today(): Promise<BigNumber>;

    dailyLimits(
      arg0: string
    ): Promise<{
      dailyLimit: BigNumber;
      spentToday: BigNumber;
      lastDay: BigNumber;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
    }>;

    VERSION(): Promise<string>;
  };

  setup(
    tokens: string[],
    _dailyLimits: BigNumberish[],
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  manager(): Promise<string>;

  executeDailyLimit(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  changeMasterCopy(
    _masterCopy: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  changeDailyLimit(
    token: string,
    dailyLimit: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  NAME(): Promise<string>;

  today(): Promise<BigNumber>;

  dailyLimits(
    arg0: string
  ): Promise<{
    dailyLimit: BigNumber;
    spentToday: BigNumber;
    lastDay: BigNumber;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
  }>;

  VERSION(): Promise<string>;

  filters: {
    ChangedMasterCopy(masterCopy: null): EventFilter;
  };

  estimate: {
    setup(tokens: string[], _dailyLimits: BigNumberish[]): Promise<BigNumber>;

    manager(): Promise<BigNumber>;

    executeDailyLimit(
      token: string,
      to: string,
      amount: BigNumberish
    ): Promise<BigNumber>;

    changeMasterCopy(_masterCopy: string): Promise<BigNumber>;

    changeDailyLimit(
      token: string,
      dailyLimit: BigNumberish
    ): Promise<BigNumber>;

    NAME(): Promise<BigNumber>;

    today(): Promise<BigNumber>;

    dailyLimits(arg0: string): Promise<BigNumber>;

    VERSION(): Promise<BigNumber>;
  };
}