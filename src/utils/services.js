import axios from 'axios';
import toast from 'react-hot-toast';
import { formateDate } from "./formateDate";

axios.defaults.baseURL = 'http://localhost:2000';

// TODO: Return list of services from "/services" endpoint
const getServices = async () => {
  try {
    const response = await axios.get('/services');
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }

};

// TODO: Return list of appointments from "/appointments" endpoint
const getAppointments = async (id) => {
  try {
    const response = await axios.get(`/appointments/${id}`);
    const formatedResponse = response.data.map(app => {
      const date = formateDate(app.apptStartTime);
      return { ...app, apptStartTime: date };
    });
    return formatedResponse;
  }
  catch (error) {
    toast.error(error.message);
  }

};

// TODO: Add an appointment to the "/appointments/:id" endpoint
const addAppointment = async (dataAppointment, idAppointment) => {
  try {
    const response = await axios.post(`/appointments/${idAppointment}`, dataAppointment);
    toast.success("Appointment added");
    return response.data;
  }
  catch (error) {
    toast.error(error.message);
  }
};



export { getServices, getAppointments, addAppointment };
