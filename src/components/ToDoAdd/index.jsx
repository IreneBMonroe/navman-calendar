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
	FormFeedback,
	Col
} from 'reactstrap';
import DatePicker from 'react-datepicker';
import {addTodo} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const ToDoAdd = () => {
	const [modal, setModal] = useState(false);
	const [description, setDescription] = useState();
	const [dateTime, setDateTime] = useState(new Date());
	const toggle = () => setModal(!modal);
	let dispatch = useDispatch();
	const handleDescriptionChange = e => setDescription(e.target.value);
	const handleDateChange = date => {
		setDateTime(date);
	};
	let inputProps = {
		selected: dateTime,
		placeholder: 'Set the date',
		name: 'dueDate',
		id: 'dueDate',
		onChange: (date) => handleDateChange(date),
		showTimeSelect: true,
		dateFormat: 'Pp',
		className: 'form-control'
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
			<Button color="success" className={`btn-circle text-md`} onClick={toggle}><FontAwesomeIcon
				icon={faPlus}/></Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Add To Do</ModalHeader>
				<ModalBody>
					<Form>
						<FormGroup row>
							<Label for="description" sm={3}>Description</Label>
							<Col sm={9}>
								<Input type="text" name="description" id="description" placeholder="To do description"
								       value={description} onChange={handleDescriptionChange}
								       requied/>
								<FormFeedback>Description is required.</FormFeedback>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="dueDate" sm={3}>Due Date</Label>
							<Col sm={9}>
								<DatePicker {...inputProps} />
								<FormFeedback>Please select due date.</FormFeedback>
							</Col>
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
