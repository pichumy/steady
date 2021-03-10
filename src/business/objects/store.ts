import { Example } from './example';

export interface IStore {
  readonly exampleData: IExampleState;
}

export interface IExampleState {
  readonly data1: string;
  readonly example: Example;
}
