import LandingPage from "./components/Landing";
import { getServices } from "utils/services";

const App = () => {
  getServices();
  return (
    <main>
      <LandingPage />
    </main>
  );
};

export default App;
