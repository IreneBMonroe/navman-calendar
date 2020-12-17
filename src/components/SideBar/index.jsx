import React from 'react';
import TodoListByDay from "../ToDoTimeline";
import {Col} from "reactstrap";

const SideBar = () => {
    return (
        <>
            <Col md={4} sm={12} className="side-bar">
                <TodoListByDay />
            </Col>
        </>
    );
};

export default SideBar;
