export const ADD_TODO = "ADD_TODO";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const SET_FILTER = "SET_FILTER";

export const addTodo = (todo) =>{
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const updateStatus = (id, status) =>{
    return {
        type: UPDATE_STATUS,
        payload: {
            id: id,
            status: status
        }
    }
}

export const setFilter = (filter) =>{
    return {
        type: SET_FILTER,
        payload: { filter }
    }
}
