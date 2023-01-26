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
import OurStandars from "./components/OurStandars";
import InstantConnectivity from "./components/InstantConnectivity";
import Features from "./components/Features";
import StayConnect from "./components/StayConnect";
import Faq from "./components/Faq";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import Loding from "./components/Loding";
import { useEffect, useState } from "react";

function App() {
  const [preload, setpreload] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setpreload(false)
      document.body.classList.remove('overflow_hidden_preloder');
    }, 3000)
  })


  return (
    <>
      <div className='overflow_hidden_preloder'>
        {preload && <Loding />}

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
        <Features />
        <StayConnect />
        <Faq />
        <Solutions />
        <Footer />
      </div>
    </>
  );
}
export default App;
