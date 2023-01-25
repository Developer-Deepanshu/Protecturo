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

function App() {
    return (
        <>
            <div className="min-vh-100 position-relative overflow-hidden">
                <NavBar />
                <Hero />
            </div>
            <TakeControl />
            <Ourproducts />
            <Benefits />
            <Works />
            
        </>

    )
}
export default App
