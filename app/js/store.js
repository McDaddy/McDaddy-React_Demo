import { createStore } from 'redux';
import { combineReducers } from 'redux';
import homeReducer from './reducers/homeReducer';

let reducers = combineReducers({homeReducer});
let store = createStore(reducers);

export default store;
