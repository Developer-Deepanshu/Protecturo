import "./App.css";
import "./assets/css/root.css";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Ourproducts from "./components/Ourproducts";
import Benefits from "./components/Benefits";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Ourproducts />
      <Benefits />
      <Works />
    </>
  );
}

export default App;
