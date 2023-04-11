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
      <Button onClick={handleToggleServices}>{!openServices? "get started" : "back" }</Button>
      
    </div>
  );
};

export default Landing;
