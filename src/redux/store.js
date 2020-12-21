import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';
import {states} from './states';
import {fetchToDos, fetchTodosByDate} from './actions';
import {createLogger} from 'redux-logger';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();
const store = createStore(reducers, states, composeEnhancers(applyMiddleware(thunk, logger)));

//store.dispatch(fetchToDos());
store.dispatch(fetchTodosByDate(new Date()));

export default store;
