export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";
export const DELETE_TODO = "DELETE_TODO";

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
