import {useState, useEffect} from 'react';

const useTime = (dateTime) => {
    const [time, setTime] = useState([]);

    useEffect(() => {
        if (!dateTime) return;
        let time = new Date(dateTime).getTime();
        setTime(time);
    },[dateTime]);

    return {time};
};

export default useTime;
