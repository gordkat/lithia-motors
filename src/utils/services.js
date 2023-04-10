import axios from "../../node_modules/axios/index";

axios.defaults.baseURL = 'http://localhost:2000';

const getServices = async () => {
  // TODO: Return list of services from "/services" endpoint
  const response = await axios.get('/services');

  return response.data;
};

const getAppointments = async (id) => {
  const response = await axios.get(`/appointments/${id}`);
  return response.data;
};

const addAppointment = async (dataAppointment, idAppointment) => {
  const response = await axios.post(`/appointments/${idAppointment}`, dataAppointment);
  return response.data;
};



export { getServices, getAppointments, addAppointment };
