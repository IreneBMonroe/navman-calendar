import React, {useState} from 'react';
import {Badge, Row, Col, Button} from 'reactstrap';
import './styles.scss';
import moment from 'moment';
import {useDispatch} from "react-redux";
import {updateTodo} from '../../redux/actions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faMinus} from '@fortawesome/free-solid-svg-icons';

const ToDoItem = ({item, index}) => {
    const [isShow, setIsShow ] = useState(false);
    const dispatch = useDispatch();
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
                return 'secondary';
                break;
            default:
                return 'secondary';
        }
    };
    
    let badgeColor = handleBadgeClassname(index);
    
    const handleShow = () => {
        setIsShow(!isShow);
    };
    return (
        <div className={`timeline-item align-middle`} as={`a`} onMouseOver={handleShow} onMouseLeave={handleShow}>
            <Row>
                <Col xs={`2`} className={'text-center align-middle'}> <Badge color={badgeColor} pill className={"timeline-item-badge text-white"}>{time}</Badge></Col>
                <Col xs={`6`} className={'timeline-text text-white align-middle'}>{item.description}</Col>
                <Col xs={`4`} className={`text-right align-middle ${isShow ? "d-block" : "d-none"}`}><Button color="success" className={'btn-circle btn-sm'} onClick={()=> dispatch(updateTodo({ id: item.id, status: 'completed'}))}><FontAwesomeIcon
                    icon={faCheck}/> </Button>{` `}
                <Button color="warning" className={'btn-circle btn-sm text-white'} onClick={()=> dispatch(updateTodo({ id: item.id, status: 'postpone'}))}><FontAwesomeIcon
                    icon={faMinus}/></Button></Col>
            </Row>
        </div>
    );
};

export default ToDoItem;
