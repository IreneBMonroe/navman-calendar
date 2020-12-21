import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {Row, Col} from 'reactstrap';
import ToDoAdd from '../ToDoAdd';
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import {fetchToDos, fetchTodosFailure, fetchTodosLoading, fetchTodosSuccess} from "../../redux/actions";
import { bindActionCreators } from 'redux';


const selectNumOfStatusType = createSelector(
    state => state.todos,
    (_, status) => status,
    (todos, status) => todos.filter(todo => (todo.status === status)).length
);

export const StatusTypeTodosCounter = () => {
    const NumOfTodosByType = useSelector(selectNumOfStatusType)
    return <>{NumOfTodosByType}</>
}

const ToDoSummary = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    const openModal = () => {
        setIsOpen(!isOpen);
    };
    console.log(todos);
   /*
    useEffect(() => {
        fetchToDos()
    },[todos])*/

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
const mapStateToProps = (state) => ({
  /*  error: fetchTodosFailure(state),
    todos: fetchTodosSuccess(state),
    loading: fetchTodosLoading(state)*/
    error: state.todos.error,
    todos: state.todos.items,
    loading: state.todos.loading
});

/*const mapDispatchToProps = dispatch => bindActionCreators({
    fetchToDos: () => {dispatch(fetchToDos)}
}, dispatch)*/

const mapDispatchToProps = dispatch => {
    return { fetchTodos: () => dispatch(fetchToDos()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoSummary);
