import Request from '../request';
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";
export const DELETE_TODO = "DELETE_TODO";
export const CURRENT_DATE = "CURRENT_DATE";
export const SELECT_DATE = "SELECT_DATA";
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

export const getUserData = id => async (dispatch, getState) => {
    dispatch({
        type: "Users.LOAD_USERS_REQUEST"
    });
    try {
        const response = await Request(`${_URL}users/${id}`).then(response => response.json());
        dispatch({
            type: "Users.LOAD_USERS_SUCCESS",
            payload: {
                response
            }
        });
    } catch (e){
	    dispatch({
		    type: "Users.LOAD_USERS_FAILURE"
	    });
    }
    dispatch({
        type: "Users.LOAD_USERS_FAILURE"
    });
};
export const getToDosData = date => async (dispatch, getState) => {
    dispatch({
        type: "Todos.LOAD_TODOS_REQUEST"
    });
    try {
        const response = await Request(`${_URL}todos?_order=asc&dueDate_eq=${date}`).then(response => response.json());
        dispatch({
            type: "Todos.LOAD_Todos_SUCCESS",
            payload: {
                response
            }
        });
    } catch (e){
        dispatch({
            type: "Todos.LOAD_TODOS_FAILURE"
        });
    }
    dispatch({
        type: "Todos.LOAD_TODOS_FAILURE"
    });
};