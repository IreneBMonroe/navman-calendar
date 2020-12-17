import React from 'react';
import TodoList from "../ToDoList";
import WeatherReport from "../WeatherReport";
import {Col} from "reactstrap";
import './styles.scss';

const SideBar = () => {
    return (
        <Col className="side-bar" md={5} sm={12} >
            <WeatherReport />
            <TodoList />
        </Col>
    );
};

export default SideBar;
