import "./App.css";
import "./assets/css/root.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Ourproducts from "./components/Ourproducts";
import Benefits from "./components/Benefits";
import Works from "./components/Works";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import TakeControl from "./components/TakeControl";
import Sandhir from "./components/Sandhir";
import Gunjan from "./components/Gunjan";
import OurStandars from "./components/OurStandars";
import InstantConnectivity from "./components/InstantConnectivity";

function App() {
  return (
    <>
      <div className="min_vh_md_100 d-flex flex-column">
        <NavBar />
        <Hero />
      </div>
      <TakeControl />
      <OurStandars />
      <InstantConnectivity />
      <Ourproducts />
      <Benefits />
      <Works />
      <Sandhir />
      <Gunjan />
    </>
  );
}
export default App;
