import React, {useState} from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback
} from 'reactstrap';
import Datetime from 'react-datetime';
import {addTodo} from '../../redux/actions';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
const ToDoAdd = (props) => {
    const [modal, setModal] = useState(false);
    const [description, setDescription] = useState();
    const [dateTime, setDateTime] = useState();
    const toggle = () => setModal(!modal);
    let dispatch = useDispatch();
    let inputProps = {
        placeholder: 'Set the date',
        name: 'dueDate',
        id: 'dueDate',
        onChange: (e)=> setDateTime(e.target.value)
    };
    return (
        <>
            <Button color="primary" onClick={toggle}>+</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add To Do</ModalHeader>
                <ModalBody className={'text-center'}>
                    <Form>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input type="text" name="description" id="description" placeholder="To do description" value={description} onChange={(e)=> setDescription(e.target.value)}
                                   requied/>
                            <FormFeedback>Description is required.</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for="dueDate">Due Date</Label>
                            <Datetime inputProps={ inputProps } />
                            <FormFeedback>Please select due date.</FormFeedback>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        dispatch(addTodo({
                            id: uuid(),
                            description: description,
                            dueDate: dateTime,
                            status: "undone"
                        }));
                        setDescription('');
                        setDateTime('');
                        toggle();
                    }}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default ToDoAdd;
