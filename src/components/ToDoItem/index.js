import React, {useState} from 'react';
import {Badge, ListGroupItem} from 'reactstrap';
import moment from 'moment';
/*import useTime from '../../hooks/useTime';*/

const ToDoItem = ({item, index}) => {
    let time = new Date(item.dueDate).getTime();
    const handleBadgeClassname = (index) =>{
        switch(index){
            case 0:
                return 'danger';
                break;
            case 1:
                return 'warning';
                break;
            case 2:
                return 'primary';
                break;
            case 3:
                break;
            default:
                return 'secondary';
        }
    };
    
    let badgeColor = handleBadgeClassname(index);

    return (
        <ListGroupItem className={`timeline-item`}>
            <Badge color={badgeColor} pill>{time}</Badge>
            <span className={'timeline-text'}>{item.description}</span>
        </ListGroupItem>
    );
};

export default ToDoItem;
