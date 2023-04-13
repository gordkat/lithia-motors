import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import './Form.css';
import { getAppointments, addAppointment } from '../utils/services';
import Button from './library/Button';
import Popup from './Popup';

const Form = ({id}) => {
    const [appointments, setAppointments] = useState([]);
    const [idAppointment, setIdAppointment] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [isFirstForm, setIsFirstForm] = useState(true);
    const [userData, setUserData] = useState({
        email: "",
        name: "",
        make: "",
        model: "",
        modelYear: "",
    })

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
            setIsFirstForm(false);
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
        setIsFirstForm(true);
        setIdAppointment("");
        setSelectedDate("");
        setUserData({
            email: "",
        name: "",
        make: "",
        model: "",
                modelYear: "",
            }
        )
    }

    const handleChangeUserData = (event) => {
        const { name, value } = event.target;
        setUserData(prev => ({
            ...prev, [name]: value,
        }));
    };
    
     const handleSubmitUserData = (event) => {
         event.preventDefault();         
         setShowPopup(true);
         event.currentTarget.reset();
         
  };

    return (
        <>
         {isFirstForm && <form onSubmit={handleSubmit} className="form-wrapper">
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
                   
         <Button type='submit'>next</Button>   
            </fieldset>
            </form>}


            {!isFirstForm && <form onSubmit={handleSubmitUserData}  className="form-user">
                <label className='label'>Email
                    <input
                 className='input-data'       
            type="email"
            required
            onChange={handleChangeUserData}
            name="email"
            value={userData.email}
          />
                </label>

                <label className='label'>Name
                    <input
                        className='input-data'
            type="text"
            required
            onChange={handleChangeUserData}
            name="name"
            value={userData.name}
          />
                </label>

                <label className='label'>Vehicle Make
                    <input
                        className='input-data'
            type="text"
            required
            onChange={handleChangeUserData}
            name="make"
            value={userData.make}
          />
                </label>

                <label className='label'>Vehicle Model
                    <input
                        className='input-data'
            type="text"
            required
            onChange={handleChangeUserData}
            name="model"
            value={userData.model}
          />
                </label>

                <label className='label'>Vehicle Model Year
                    <input
                        className='input-data'
            type="number"
            required
            onChange={handleChangeUserData}
            name="modelYear"
            value={userData.modelYear}
          />
                </label>

                <div className='wrapper-btn-form'>
                    <Button type='button' onClick={() => setIsFirstForm(true)}>cancel</Button>
                    <Button type='submit'>book</Button>
                </div>
            </form>}


            {showPopup &&
                <Popup
                text={selectedDate}
                    onAddAppointment={() => { handleAddApointment(userData, idAppointment); }}
                    onClosePopup={handleClosePopup}
                    />}               
             
        </>
        
    )
};

export default Form;