import React from 'react';
import {Col, Row} from 'reactstrap';
import ToDoItem from '../ToDoItem';
import {useSelector} from "react-redux";
import moment from 'moment';

const TodoList = () => {
	let todos = useSelector(state => state.todos);
	let currentDate = useSelector(state => state.currentDate);
	let day = moment(currentDate).format('dddd');
	let monthDate = moment(currentDate).format('D MMMM');
	
	if (!todos || todos.length === 0) {
		return <p> No Todos</p>
	}
	
	return (
		<div className={'timeline'}>
			<>
				<div className={`timeline-item`}>
					<Row>
						<Col xs={`2`} className={'text-center'}>
							<div className={`timeline-item-dot`}>
							</div>
							<div className={'connector'}>
							</div>
						</Col>
						<Col className={'timeline-text text-white'}>
							<small className={"text-light"}>{monthDate}</small> <br/>
							<h2 className={"text-light"}>{day}</h2>
						</Col>
					</Row>
				</div>
				{
					todos && todos.map((todo, i) => {
							return <ToDoItem key={todo.id} item={todo} index={i}/>
						}
					)
				}
			</>
		</div>
	);
}

export default TodoList;
