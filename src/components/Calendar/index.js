import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles.scss';
import {useDispatch} from 'react-redux';
import {selectDate} from "../../redux/actions";


function Calender() {
    const [value, setValue] = useState(new Date());
    let dispatch = useDispatch();
    const handleChange = (date) =>{
        setValue(date);
        dispatch(selectDate(date));
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

export default Calender;
