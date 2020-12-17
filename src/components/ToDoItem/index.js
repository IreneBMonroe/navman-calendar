import React, {useState} from 'react';
import {Badge, ListGroupItem} from 'reactstrap';
/*import useTime from '../../hooks/useTime';*/

const ToDoItem = ({item}) => {
    let time = new Date(item.dueDate).getTime();

    /*const { time } = useTime(now);*/

    return (
        <ListGroupItem className={`timeline-item`}>
            <Badge color="primary" pill>{time}</Badge>
            <span className={'timeline-text'}>{item.description}</span>
        </ListGroupItem>
    );
};

export default ToDoItem;
