import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchTodosByDateFailure, fetchTodosByDate, fetchTodosByDateLoading, selectDate, fetchTodosByDateSuccess} from "../../redux/actions";
import {bindActionCreators} from "redux";


function Calender(props) {
    const [value, setValue] = useState(new Date());
    let dispatch = useDispatch();
    const handleChange = (date) =>{
        setValue(date);
        dispatch(selectDate(date));
        dispatch(fetchTodosByDate(date));
    };
    
    return (
        <div className={`dashboard-calendar`}>
            <Calendar
                onChange={handleChange}
                value={value}
            />
        </div>
    );
}
const mapStateToProps = (state) => ({
    error: fetchTodosByDateFailure(state),
    todos: fetchTodosByDateSuccess(state),
    loading: fetchTodosByDateLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodosByDate: fetchTodosByDate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Calender);
