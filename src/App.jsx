import LandingPage from "./components/Landing";
import { getServices } from "utils/services";
import { Toaster } from 'react-hot-toast';

const App = () => {
  getServices();
  return (
    <main>
      <LandingPage />
      <Toaster position="top-right" />
    </main>
  );
};

export default App;
