import { format } from 'date-fns';

function getDayOfWeek (year = format(new Date(),'yyyy'), month = format(new Date().getMonth(),'mm'), day = new Date()){
    const res = new Date(year, month-1, day);
    return format(res, 'eeee');
}

export default getDayOfWeek;