import React, { useEffect } from "react";
import hero_shadow from "../assets/img/png/hero_bg_shadow.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg_hero flex-grow-1 position-relative">
        <img
          className="w-100 position-absolute bottom-0"
          src={hero_shadow}
          alt="hero_shadow"
        />
        <div className="container">
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="top"
            className="pb_250_max_xl pt-5">
            <div className="hero_line m-auto"></div>
            <h1
              className="fw-bold ff_bold_gilroy fs_xl_3 text-center text_white_3
                     mw_980 m-auto">
              Cyber safety starts here. For both commercial and personal.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
