import "./Landing.css";
import Button from './library/Button';
import Appointments from "./Appointments";

const Landing = () => {
  return (
    <div className="splash">
      <h1>Welcome to Lithia Motors</h1>
      <img src='/images/logo.png' alt="Logo" />
      <p className="description">Lithia Motors wants to put you in full control of your car-owning experience by providing easy to book service appointments from the comfort of your own home!</p>
      <Button>get started</Button>
      <Appointments/>
    </div>
  );
};

export default Landing;
