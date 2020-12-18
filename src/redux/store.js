import { createStore, applyMiddleware  } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';
import {state} from './states';

const middlewares = [thunk];

const store = createStore(reducers, state, applyMiddleware(...middlewares));
export default store;
/*store.subscribe(()=> console.log(store.getState()));*/
