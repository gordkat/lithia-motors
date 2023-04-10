import moment from '../../node_modules/moment/moment';

export const formateDate = (appointmentDate) => {
    return moment(appointmentDate).format('dddd, MMMM Do h:mm A');
}


