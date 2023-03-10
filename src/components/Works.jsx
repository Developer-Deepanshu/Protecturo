import React, { useEffect } from "react";
import cell from "../assets/img/png/cell.png";
import cart from "../assets/img/png/cart.png";
import code from "../assets/img/png/code.png";
import redline from "../assets/img/png/redline.png";
import red_dots from "../assets/img/png/howItsWork_Dots.png";
import red from "../assets/img/png/red.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <section className="bg-black py-4 py-md-5 position-relative">
      <img
        className="position-absolute end-0 red_circle_position_work_end"
        src={red_dots}
        alt="red_cricle"
      />

      <div className="container">
        <p className="ff_bold_gilroy fs_md bg_red_grad_1 text-center mb-0">
          How it works
        </p>

        <h2 className="ff_bold_gilroy fs_xl text_white_1 text-center ">
          <span className="d-lg-block">Learn how does</span> this inter national
          eSIM work
        </h2>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="row mt-5 justify-content-center position-relative  "
        >
          <div>
            <img
              className="position-absolute position_line d-none d-lg-block"
              src={redline}
              alt="redline"
            />
          </div>
          <div>
            <img
              className="position-absolute position_red_line d-none d-lg-block"
              src={red}
              alt="redline"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-md-5 pt-md-4 mb-5">
            <div className="text-center ">
              <img src={cell} alt="cell" />
              <h2 className="ff_bold_gilroy text_white_1 fs_lg text-center mt-4">
                Check
              </h2>
              <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 w-170 mx-auto ">
                that your smartphone supports eSIM
              </p>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-5">
            <div className="text-center ">
              <img src={cart} alt="cell" />
              <h2 className="ff_bold_gilroy text_white_1 fs_lg text-center mt-4">
                Buy
              </h2>
              <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 w-170 mx-auto ">
                Install the QR
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-md-5 mb-5 pt-md-4">
            <div className="text-center">
              <img src={code} alt="cell" />
              <h2 className="ff_bold_gilroy text_white_1 fs_lg text-center mt-4 white_space">
                Install the QR
              </h2>
              <p className="ff_bold_gilroy fs_xsm text_gray_2 mb-0 mt-2 w-195 mx-auto ">
                and configure it. Activate it just before your leave
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
