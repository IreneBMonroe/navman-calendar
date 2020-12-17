import React from 'react';
import { ListGroup } from 'reactstrap';
import ToDoItem from '../ToDoItem';
import {useSelector} from "react-redux";

function TodoListByDay() {
    let todos = useSelector(state => state);
    return (
        <ListGroup className={'timeline'}>
            {
                todos.list && todos.list.map((todo) => {
                        return <ToDoItem key={todo.id} item={todo}/>
                    }
                   )
            }
            {/*<ToDoItem key={1} item={{
                userId: 1,
                id: 0,
                description: "Deserunt reprehenderit culpa.",
                status: "postponed",
                dueDate: "2020-11-18T10:36:49.375Z"
            }} />
            <ToDoItem key={2} item={{
                userId: 1,
                id: 1,
                description: "Deserunt reprehenderit.",
                status: "postponed",
                dueDate: "2020-11-18T10:36:49.375Z"
            }} />
            <ToDoItem key={3} item={{
                userId: 1,
                id: 2,
                description: "Deserunt reprehenderit culpa culpa.",
                status: "postponed",
                dueDate: "2020-11-18T10:36:49.375Z"
            }} />*/}

        </ListGroup>
    );
}

export default TodoListByDay;
