import { useEffect, useState } from 'react';

import { getAppointments, addAppointment } from '../utils/services';
import Button from './library/Button';
import './ServiceCard.css';
import { formateDate } from 'utils/formateDate';

const ServiceCard = ({ name, url, id }) => {
    const [showMore, setShowMore] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [user, setUser] = useState({
        email:"JohnDoe123@example.com",
        name: "John Doe",
        make: "Mazda",
        model: "Miata",
        modelYear: "2005"
    })

    const [idAppointment, setIdAppointment] = useState('');

    useEffect(() => {
        const fetchAppointments = async () => {
            const data = await getAppointments(id); 
            setAppointments(data);
        }
        fetchAppointments();        
    }, []);
    
    const handleChange = e => {
        setIdAppointment(e.target.value);
  }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        addAppointment(user, idAppointment);        
    }


    
    return (<div className='wrapperCard'>
        <div className='headerCard'>
            <img
              src={url}
              alt="Oil change icon"
              width="100"
              height="100"
            />
            <p className='title'>{name}</p>

            <img
              src="/images/caret-icon.svg"
              alt="Caret icon"
              width="25"
              height="25"
            />
        </div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Available Appointments</legend>
                {appointments.length>0 && appointments.map(({ id, serviceName, apptStartTime }) => {
                    const date = formateDate(apptStartTime);
                    return (
                        <div key={id} >                            
                            <label>                                
                                <input
                                type="radio"
                                name={serviceName}
                                    value={id}
                                    onChange={handleChange} 
                                checked={id===idAppointment}    
                                />
                                {date}
                            </label>
                        </div>
                    )
                })
                }
                   
         <Button type='submit'>book</Button>   
            </fieldset>
        </form>
       
        
    </div>)
};

export default ServiceCard;