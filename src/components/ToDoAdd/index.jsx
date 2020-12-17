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
import DatePicker from 'react-datepicker';
import {addTodo} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

const ToDoAdd = () => {
	const [modal, setModal] = useState(false);
	const [description, setDescription] = useState();
	const [dateTime, setDateTime] = useState(new Date());
	const toggle = () => setModal(!modal);
	let dispatch = useDispatch();
	const handleDescriptionChange = e => setDescription(e.target.value);
	const handleDateChange = date => {
		console.log(date);
		setDateTime(date);
	}
	let inputProps = {
		selected: dateTime,
		placeholder: 'Set the date',
		name: 'dueDate',
		id: 'dueDate',
		onChange: (date) => handleDateChange(date),
		showTimeSelect: true,
		dateFormat: 'Pp'
	};
	
	const handleClick = () => {
		dispatch(addTodo({
			id: Math.ceil(Math.random() * 100),
			description: description,
			dueDate: dateTime,
			status: "undone"
		}));
		setDescription('');
		setDateTime('');
		toggle();
	};
	return (
		<>
			<Button color="success" className={`btn-circle text-md`} onClick={toggle}>+</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Add To Do</ModalHeader>
				<ModalBody className={'text-center'}>
					<Form>
						<FormGroup>
							<Label for="description">Description</Label>
							<Input type="text" name="description" id="description" placeholder="To do description"
							       value={description} onChange={handleDescriptionChange}
							       requied/>
							<FormFeedback>Description is required.</FormFeedback>
						</FormGroup>
						<FormGroup>
							<Label for="dueDate">Due Date</Label>
							<DatePicker {...inputProps} />
							<FormFeedback>Please select due date.</FormFeedback>
						</FormGroup>
					</Form>
				</ModalBody>
				<ModalFooter>
					<Button color="success" onClick={handleClick}>Save</Button>{' '}
					<Button color="danger" onClick={toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		</>
	);
}

export default ToDoAdd;
