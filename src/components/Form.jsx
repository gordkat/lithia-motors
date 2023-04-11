import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './Form.css';
import { getAppointments, addAppointment } from '../utils/services';
import Button from './library/Button';
import Popup from './Popup';
import user from '../utils/user.json';

const Form = ({id}) => {
    const [appointments, setAppointments] = useState([]);
    const [idAppointment, setIdAppointment] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
   

    useEffect(() => {
        const fetchAppointments = async () => {
            const serviceAppointments = await getAppointments(id);
            setAppointments(serviceAppointments);
        }
        fetchAppointments();        
    }, [id]);

    
    const handleChange = (e) => {          
        setSelectedDate(e.target.value);         
    }

   

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (selectedDate) {
            const {id} = appointments.find(appointment => 
                appointment.apptStartTime === selectedDate                
            )
            setIdAppointment(id);
            setShowPopup(true);            
        } else {
            toast.error("Please choose an appointment");
        }
                      
    }

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleAddApointment = (user, idAppointment) => {
        addAppointment(user, idAppointment);
        setShowPopup(false);
    }

    return (
        <>
         <form onSubmit={handleSubmit} className="form-wrapper">
            <fieldset className='form'>
                <legend className='form-title'>Available Appointments</legend>
                {appointments.length>0 && appointments.map(({ id, serviceName, apptStartTime }, index) => {      
                return (
                        <div key={id} >                            
                            <label className='label'>                                
                            <input
                                className='input'
                                type="radio"
                                name={serviceName}
                                    value={apptStartTime}
                                    onChange={handleChange}  
                                checked={selectedDate===apptStartTime}    
                                />
                                {apptStartTime}
                            </label>
                            
                        </div>
                    )
                })
                }
                   
         <Button type='submit'>book</Button>   
            </fieldset>
            </form>
            {showPopup &&
                <Popup
                text={selectedDate}
                    onAddAppointment={() => { handleAddApointment(user, idAppointment); }}
                    onClosePopup={handleClosePopup}
                    />}               
        </>
        
    )
};

export default Form;