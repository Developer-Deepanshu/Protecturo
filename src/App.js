import "./App.css";
import "./assets/css/root.css";
import Hero from "./components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import TakeControl from "./components/TakeControl";

function App() {
  return (
    <>
      <div className="min-vh-100 position-relative overflow-hidden">
        <NavBar />
        <Hero />
      </div>
      <TakeControl />
    </>
  );
}

export default App;
