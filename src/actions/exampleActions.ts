import { Action } from 'redux';
import { Example } from '../business/objects/example';

export const RECEIVE_EXAMPLE = "RECEIVE_EXAMPLE";
export type RECEIVE_EXAMPLE = typeof RECEIVE_EXAMPLE;

export interface IReceiveExample extends Action {
  type: RECEIVE_EXAMPLE;
  example: Example;
}

export type ExampleActions =
  | IReceiveExample;

  export const receiveExample = (example: Example) => {
    return { type: RECEIVE_EXAMPLE, example }
  }
