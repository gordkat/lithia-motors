import './Popup.css';
import Button from './library/Button';

const Popup = ({text, onClosePopup, onAddAppointment}) => {
    return (<div className='popup-container'>
        <div className='popup-body'>
            <p className='text'>You are booking an appointment for {text} </p> 
            <div className='btn-wrapper'>
                <Button onClick={onClosePopup}>cancel</Button>  
                <Button onClick={onAddAppointment}>confirm</Button>
            </div>
           
        </div>
      
    </div>)
};

export default Popup;