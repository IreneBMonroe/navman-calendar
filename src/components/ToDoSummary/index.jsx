import React, {useState} from 'react';
import {Row, Col, Button} from 'reactstrap';
import ToDoAdd from '../ToDoAdd';
import './styles.scss';

const ToDoSummary = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    const showModal = () => {
        setIsShow(!isShow);
    };

    return (
        <div className={`summary`}>
            <Row>
                <Col sm={2}>
                    <h5 className={`primary`}>Completed</h5>
                    <div className={`result primary`}>48</div>
                </Col>
                <Col sm={2}>
                    <h5 className={`warning`} >Postponed</h5>
                    <div className={`result warning`}>12</div>
                </Col>
                <Col sm={2}>
                    <h5 className={`danger`}>Undone</h5>
                    <div className={`result danger`}>6</div>
                </Col>
                <Col sm={2}>
                    <h5 className={`info`}>All Tasks</h5>
                    <div className={`result info`}>66</div>
                </Col>
                <Col sm={3}>
                    <ToDoAdd isOpen={isShow} toggle={openModal} />
                </Col>
            </Row>

        </div>
    );
}

export default ToDoSummary;
