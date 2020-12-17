import React from 'react';
import { ListGroup } from 'reactstrap';
import ToDoItem from '../ToDoItem';
import {useSelector} from "react-redux";

function TodoListByDay() {
    let todos = useSelector(state => state.todos);
    console.log(todos);
    
    if (!todos || todos.length === 0){
        return <p> No Todos</p>
    }
    
    return (
        <ListGroup className={'timeline'}>
            {
                todos && todos.map((todo, i) => {
                        return <ToDoItem key={todo.id} item={todo} index={i} />
                    }
                   )
            }
        </ListGroup>
    );
}

export default TodoListByDay;
