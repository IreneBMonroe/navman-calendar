import React, {useState} from 'react';
import {Badge, ListGroupItem, Row, Col} from 'reactstrap';
import './styles.scss';
import moment from 'moment';

const ToDoItem = ({item, index}) => {
    let time = moment(item.dueDate).format('h:mm a');
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
        <div className={`timeline-item`} as={`a`}>
            <Row>
                <Col xs={`2`} className={'text-center '}> <Badge color={badgeColor} pill className={"timeline-item-badge text-white"}>{time}</Badge></Col>
                <Col className={'timeline-text text-white'}>{item.description}</Col>
            </Row>
        </div>
    );
};

export default ToDoItem;
