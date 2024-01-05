import React from 'react';
import styles from './ActualDay.module.css';

const ActualDay = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.day}>{props.dayOfWeek}</p>
            <span className={styles.number}>{props.day}</span>
        </div>
    );
}

export default ActualDay;
