import {combineReducers} from 'redux';
import todos from './todos';
import numeros from './numeros';

const rootReducer = combineReducers({
  todos,
  numeros
});

export default rootReducer;
