import { IStore } from '../business/objects/store';
import { combineReducers } from 'redux';
import exampleData from './exampleReducer';

const rootReducer = combineReducers<IStore>({
  exampleData
});

export default rootReducer;
