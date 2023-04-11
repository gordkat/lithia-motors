import { useState } from 'react';
import './ServiceCard.css';
import Form from './Form';


const ServiceCard = ({ name, url, id }) => {
    const [showMore, setShowMore] = useState(false); 
    

    const toggleShowMore = () => {
        setShowMore(prev=>!prev)
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
            <button className={showMore?  'btn btn-less' : "btn"} type='button' onClick={toggleShowMore}>
              <img
              src="/images/caret-icon.svg"
              alt="Caret icon"
              width="25"
              height="25"
            /> 
</button>
            
        </div>
        {showMore && <Form id={id} />} 

    </div>)
};

export default ServiceCard;