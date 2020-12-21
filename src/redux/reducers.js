import {ADD_TODO, UPDATE_TODO, DELETE_TODO, SET_FILTER, SELECT_DATE, FETCH_TODOS_SUCCESS, FETCH_TODOS_BY_DATE_SUCCESS, FETCH_TODOS_LOADING, FETCH_TODOS_FAILURE, FETCH_TODOS_BY_DATE_FAILURE, FETCH_TODOS_BY_DATE_LOADING} from './actions';
import {states} from './states';

const reducers = (state= states, action) => {
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
        case FETCH_TODOS_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
            break;
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
            break;
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
            break;
        case FETCH_TODOS_BY_DATE_LOADING:
            return {
                ...state,
                loading: true
            };
            break;
        case FETCH_TODOS_BY_DATE_SUCCESS:
            return {
                ...state,
                loading: false,
                currentToDos: action.payload,
            };
            break;
        case FETCH_TODOS_BY_DATE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
            break;
        default:
            return state;
    }
}


export default reducers;
