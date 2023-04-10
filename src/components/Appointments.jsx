import ServiceCard from "./ServiceCard";
import { getServices } from "utils/services";
import { useEffect, useState } from "react";
import { findUrlSvg } from "utils/findUrlSvg";

const Appointments = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchServices = async () => {
            const data = await getServices(); 
            setServices(data);
        }
        fetchServices();        
    }, []);
    
    return (<div>  
        {services.length > 0 && services.map(({ id, serviceName, serviceDuration }) => {  
            const urlSvg = findUrlSvg(id);
            return(<ServiceCard key={id} id={id} name={serviceName} duration={serviceDuration} url={urlSvg} />)
            })}        
    </div>)
};

export default Appointments;