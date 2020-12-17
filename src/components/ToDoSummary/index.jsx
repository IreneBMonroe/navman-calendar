import React, {useState} from 'react';
import {Row, Col, Button} from 'reactstrap';
import ToDoAdd from '../ToDoAdd';
import './styles.scss';

const ToDoSummary = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`summary`}>
            <Row className={`align-items-start`}>
                <Col sm={2} className={`text-success`}>
                    <h5>Completed</h5>
                    <div className={`result primary`}>48</div>
                </Col>
                <Col sm={2} className={`text-warning`}>
                    <h5>Postponed</h5>
                    <div className={`result warning`}>12</div>
                </Col>
                <Col sm={2} className={`text-danger`}>
                    <h5>Undone</h5>
                    <div className={`result danger`}>6</div>
                </Col>
                <Col sm={2} className={`text-primary`}>
                    <h5>All Tasks</h5>
                    <div className={`result`}>66</div>
                </Col>
                <Col sm={2}>
                    <ToDoAdd isOpen={isOpen} toggle={openModal} />
                </Col>
            </Row>

        </div>
    );
}

export default ToDoSummary;
