import {
  RECEIVE_EXAMPLE,
  ExampleActions
} from '../actions/exampleActions';
import { IExampleState } from '../business/objects/store';

import { Reducer } from 'redux';
import { Example, ExampleObject } from '../business/objects/example';

class ExampleState implements IExampleState {
  constructor(
    public data1: string = '',
    public example: Example = {
      exampleString: '',
      exampleNumber: 0,
      exampleObject: {}
    }
  ){}
}

const exampleReducer: Reducer<ExampleState, ExampleActions> = ( state = new ExampleState(), action: ExampleActions) => {
  switch(action.type){
    case RECEIVE_EXAMPLE:
      return Object.assign({}, state, {example: action.example});
    default:
      return state;
  }
};

export default exampleReducer;
