import { format, getDaysInMonth,eachDayOfInterval } from 'date-fns';

function getDays (year = format(new Date(),'yyyy'), month = format(new Date().getMonth(),'mm')){
    const days = getDaysInMonth(new Date(year,month));
    const result = eachDayOfInterval({
        start: new Date(year, month, 1),
        end: new Date(year, month, days)
    }).map((day) => ({[format(day, 'd')]: format(day, 'e')}));
    return result;
}

export default getDays;