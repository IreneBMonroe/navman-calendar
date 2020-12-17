import {ADD_TODO, UPDATE_STATUS, SET_FILTER} from './actions';
import {todos} from './states';
/*import { combineReducers } from 'redux';
import { reducer as api } from 'redux-json-api';*/

export let reducers = (state= todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            let newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
            break;
        case UPDATE_STATUS:
            let updateStatus = [...state];
            updateStatus = updateStatus.filter(todo => todo.id !== action.payload);
            return updateStatus;
            break;
        case SET_FILTER:
            break;
        default:
            return state;
    }
}

/*
export default combineReducers({
    api,
});
*/
