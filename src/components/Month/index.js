import React, {useState,useEffect} from 'react';
import styles from './Month.module.css'
import getDays from '../../api/getDays';
import { format } from 'date-fns';

const Month = (props) => {
    const [days, setDays] = useState([]);

    useEffect(() => {
        setDays(getDays(props.year, Number(props.month-1)));
    }, [props.month]);

    const Rows = () => {
        const rows = [];
        const daysInRow = 7;
        let actual = 1;
        let startMonth = true;
        let start = 0;
        for (let i = 0; i < days.length; i += daysInRow){
            const rowCells = [];
            if(days[0][1] !== '1' && startMonth){
                start = Number(days[0][1])-1;
                for(let j = 0;j < start;j++){
                    rowCells.push(<td key={`#${start}${j}`}></td>);
                }
                startMonth = false;
            }else{
                start = 0;
            }
            const rowDays = days.slice(i, i + daysInRow);
            for (let j = start; j < rowDays.length; j++){
                if(Number(props.active) !== actual){
                    rowCells.push(<td key={`${i}${j}${rowDays[j][actual]}`}
                                     onClick={props.changeCallback}>{`${actual}`}
                                    </td>);
                }else{
                    rowCells.push(<td key={`${i}${j}${rowDays[j][actual]}`} 
                                     className={styles.active}
                                     onClick={props.changeCallback}>{`${actual}`}
                                    </td>);
                }
                actual+=1;
            }
            rows.push(<tr key={i}>{rowCells}</tr>);
            i-=start;
        }
        return rows;
    };

    return (
        <div className={styles.container}>
            <div className={styles.name}>
                <button onClick={props.prevCallback}>&lt;</button>
                <p>{format(props.month, 'LLLL')} {props.year}</p>
                <button onClick={props.nextCallback}>&gt;</button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {Rows()}
                </tbody>
            </table>
        </div>
    );
}

export default Month;
