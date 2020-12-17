import { applyMiddleware, compose, createStore } from 'redux';
/*import thunk from 'redux-thunk';
import { setAxiosConfig } from 'redux-json-api';*/
import {reducers} from './reducers';

export let store = createStore(reducers);

store.subscribe(()=> console.log(store.getState()));
/*
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function configureReduxJsonApi(baseURL) {
    let hasBeenConfigured = false;
    return store => next => action => {
        if (!hasBeenConfigured) {
            hasBeenConfigured = true;
            store.dispatch(setAxiosConfig({
                baseURL
            }));
        }

        return next(action);
    }
}

export default createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(
            configureReduxJsonApi('http://localhost:9000/'),
            thunk
        )
    )
);*/
