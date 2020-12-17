import {ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_FILTER, SELECT_DATE} from './actions';
import {initialState} from './states';

const reducers = (state= initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, action.payload],
            };
            break;
        case UPDATE_TODO:
            return {
                ...state,
                todos:[...state.todos]
            };
            break;
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
            break;
        case SET_FILTER:
            break;
        case SELECT_DATE:
            return {
                ...state,
                currentDate: action.payload,
            };
            break;
        default:
            return state;
    }
}

export default reducers;
