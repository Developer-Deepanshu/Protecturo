import React, { useEffect } from "react";
import hero_shadow from "../assets/img/png/hero_bg_shadow.png";
import upArrow from "../assets/img/png/up-arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  window.onscroll = () => {
    toggleTopButton();
  };
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function toggleTopButton() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("back-to-up").classList.remove("d-none");
    } else {
      document.getElementById("back-to-up").classList.add("d-none");
    }
  }
  return (
    <>
      <div className="bg_hero flex-grow-1 position-relative">
        <button
          className="color_back_to_top rounded-circle position-fixed bottom-0 end-0 translate-middle d-none animation_backToTop"
          onClick={scrollToTop}
          id="back-to-up">
          <img className="w-100" src={upArrow} alt="back to top" />
        </button>
        <img
          className="w-100 position-absolute bottom-0"
          src={hero_shadow}
          alt="hero_shadow"
        />
        <div className="container">
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="top"
            data-aos-delay="300"
            data-aos-offset="200"
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
