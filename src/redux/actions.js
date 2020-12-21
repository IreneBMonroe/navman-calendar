import Request from '../request';
import moment from 'moment';
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";
export const DELETE_TODO = "DELETE_TODO";
export const CURRENT_DATE = "CURRENT_DATE";
export const SELECT_DATE = "SELECT_DATA";
export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const FETCH_TODOS_BY_DATE_SUCCESS = "FETCH_TODOS_BY_DATE_SUCCESS";
export const FETCH_TODOS_BY_DATE_FAILURE = "FETCH_TODOS_BY_DATE_FAILURE";
export const FETCH_TODOS_BY_DATE_LOADING = "FETCH_TODOS_BY_DATE_LOADING";

const _URL = "http://localhost:9000/";
export const addTodo = (todo) =>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const updateTodo = (id, status) =>{
    return {
        type: UPDATE_TODO,
        payload: {
            id: id,
            status: status
        }
    }
}

export const deleteTodo = (id) =>{
    return {
        type: DELETE_TODO,
        payload: {
            id: id
        }
    }
}

export const setFilter = (filter) =>{
    return {
        type: SET_FILTER,
        payload: { filter }
    }
}

export const selectDate = (date) => {
    return {
        type: SELECT_DATE,
        payload: date
    }
}

export const fetchTodosLoading = () => {
    return {
        type: FETCH_TODOS_LOADING
    }
}
export const fetchTodosSuccess = (todos) => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos
    }
}
export const fetchTodosFailure = error => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: {error}
    }
}

export const fetchTodosByDateSuccess = (todos) => {
    return {
        type: FETCH_TODOS_BY_DATE_SUCCESS,
        payload: todos
    }
}
export const fetchTodosByDateLoading = () => {
    return {
        type: FETCH_TODOS_BY_DATE_LOADING
    }
}
export const fetchTodosByDateFailure = (error) => {
    return {
        type: FETCH_TODOS_BY_DATE_FAILURE,
        payload: error
    }
}
export const fetchToDos = (dispatch, getState) => {
    dispatch(fetchTodosLoading());
    Request(`${_URL}todos`).then(response => {
        dispatch(fetchTodosSuccess(response));
    }).catch(e => dispatch(fetchTodosFailure(e)));
    /*try {
        const response = await Request(_URL,`todos`, );
        console.log('response >> ', response);
        dispatch(fetchTodosSuccess(response));
        return response;
    } catch (e){
        dispatch(fetchTodosFailure(e));
    }*/
};

export const fetchTodosByDate = date => async (dispatch, getState) => {
    dispatch(fetchTodosByDateLoading());
    
    let now = moment(new Date(date)).format('YYYY-MM-DD');
    try {
        const response = await Request(`${_URL}todos?_order=asc&dueDate=${now}`, `GET`);
        dispatch(fetchTodosByDateSuccess(response));
    } catch (e){
        dispatch(fetchTodosByDateFailure(e));
    }
};

