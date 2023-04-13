import { useState } from "react";
import "./Landing.css";
import Button from './library/Button';
import Appointments from "./Appointments";
import HomePage from "./HomePage";


const Landing = () => {
  const [openServices, setOpenServices] = useState(false);

  const handleToggleServices = () => {
    setOpenServices(prev => !prev);
 }

  return (
    <div className="splash">
      <h1>{ !openServices? "Welcome to Lithia Motors" : "Select a Serevice"}</h1>
      {!openServices?  <HomePage /> :<Appointments/> }       
      <Button onClick={handleToggleServices}>{!openServices ? "get started" : "back"}</Button>
      <div className="wrapper-contacts">
        <span> Contact us </span>
          <a href="tel:+15558723289" className="number">
            +1 555 872 3289
          </a>        
          <a href="mailto:supportbutton@lithia.com" className="number">
             supportbutton@lithia.com
          </a>
      </div>
      
    </div>
  );
};

export default Landing;
