import { getAppointments, addAppointment } from '../utils/services';
import Button from './library/Button';
import { formateDate } from 'utils/formateDate';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Popup from './Popup';

const Form = ({id}) => {
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState({
        email:"JohnDoe123@example.com",
        name: "John Doe",
        make: "Mazda",
        model: "Miata",
        modelYear: "2005"
    })
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

    //  const addIdAppointment = (id) => {
    //     console.log(id);
    // }
    
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
         <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Available Appointments</legend>
                {appointments.length>0 && appointments.map(({ id, serviceName, apptStartTime }, index) => {      
                return (
                        <div key={id} >                            
                            <label>                                
                                <input
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