import { format } from 'date-fns';

export const today = format(new Date(), 'd');
export const nowYear = format(new Date(), 'yyyy');
export const nowMonth = format(new Date(), 'MM');