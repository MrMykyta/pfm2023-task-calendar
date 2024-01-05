import React, { useEffect, useState } from 'react';
import styles from './CalendarPage.module.css';
import ActualDay from '../../components/ActualDay';
import Month from '../../components/Month';
import {today, nowYear, nowMonth} from '../../api/getToday'
import getDayOfWeek  from '../../api/getDayOfWeek';

const CalendarPage = () => {

    const [day, setDay] = useState('1');
    const [month, setMonth] = useState('1');
    const [year, setYear] = useState('1970');

    useEffect(()=>{
        setDay(today);
        setMonth(nowMonth);
        setYear(nowYear);
    },[])

    const prevMonth = () =>{
        if(Number(month) > 1){
            setMonth(`${Number(month)-1}`)
        }else{
            setMonth("12");
            setYear(`${Number(year)-1}`)
        }
    }

    const nextMonth = () =>{
        if(Number(month) < 12){
            setMonth(`${Number(month)+1}`)
        }else{
            setMonth("1");
            setYear(`${Number(year)+1}`)
        }
    }

    const changeActual = (newDay) => {
        setDay(newDay.target.innerText);
    }

    return (
        <div className={styles.calendar}>
            <ActualDay day={day} dayOfWeek={getDayOfWeek(Number(year), Number(month), Number(day))}/>
            <Month month={month}
                   year={year}
                   active={day} 
                   prevCallback={prevMonth}
                   nextCallback={nextMonth}
                   changeCallback={changeActual}/>
        </div>
    );
}

export default CalendarPage;
