import React, { useEffect } from "react";
import started_IoT from "../assets/img/svg/started_IoT.svg";
import Manage_connectivity from "../assets/img/svg/Manage_connectivity.svg";
import One_solution from "../assets/img/svg/One_solution.svg";
import Scale_ease from "../assets/img/svg/Scale_ease.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function TakeControl() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section>
        <div className="container my-5">
          <p className="text-center bg_red_grad_1 fs_md ff_bold_gilroy fw-bold mb-0">
            Our benefits
          </p>
          <h2 className="ff_bold_gilroy fw-bold fs_xl_2 text_white_1 m-auto mw_630 text-center">
            Take control of your cellular connectivity
          </h2>
          <p className="text-center mb-0 fw_medium fs_sm_2 text_gray_2 ff_medium_gilroy mw_760 m-auto mt-3">
            Your creativity is endless. Your IoT project shouldn't be held back
            by cellular connectivity. Let's build a new unicorn together.
          </p>
          <div className="row mt-5">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-xl-3 col-sm-6">
              <div className="px-4 pb-5 bg_black_1 border_radius_16 hover_cards h-100 position-relative">
                <div className="w_136 m-auto pt-3">
                  <img
                    className="w-100 take_control_filter"
                    src={started_IoT}
                    alt="Get started with IoT"
                  />
                </div>
                <p className="mb-0 text_white_1 fw-semibold ff_semiBold_gilroy pt-2 fs_md text-center">
                  Get started with IoT
                </p>
                <p className="mb-0 text_gray_2 fw_medium fs_xsm ff_medium_gilroy pt-1 text-center">
                  Our experts helps you find the most suitable carrier profile
                  for your deployment.
                </p>
                <div className="line_cards_gradient m-auto mt-3 position-absolute position_line_cards"></div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-xl-3 col-sm-6 mt-3 mt-sm-0">
              <div className="px-4 pb-5 bg_black_1 border_radius_16 hover_cards h-100 position-relative">
                <div className="w_136 m-auto pt-3">
                  <img
                    className="w-100"
                    src={Manage_connectivity}
                    alt="Get started with IoT"
                  />
                </div>
                <p className="mb-0 text_white_1 fw-semibold pt-2 ff_semiBold_gilroy fs_md text-center">
                  Manage connectivity
                </p>
                <p className="mb-0 text_gray_2 fw_medium fs_xsm pt-1 ff_medium_gilroy text-center">
                  Control all of your IoT SIM cards on a single platform.
                </p>
                <div className="line_cards_gradient m-auto mt-3 position-absolute position_line_cards"></div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-xl-3 col-sm-6 mt-3 mt-xl-0">
              <div className="px-4 pb-5 bg_black_1 border_radius_16 hover_cards h-100 position-relative">
                <div className="w_136 m-auto pt-3">
                  <img
                    className="w-100"
                    src={One_solution}
                    alt="Get started with IoT"
                  />
                </div>
                <p className="mb-0 text_white_1 fw-semibold pt-2 ff_semiBold_gilroy fs_md text-center">
                  One global solution
                </p>
                <p className="mb-0 text_gray_2 fw_medium fs_xsm pt-1 ff_medium_gilroy text-center">
                  You will receive 1 invoice and have a single point of contact
                  for support no matter where the SIMs are deployed.
                </p>
                <div className="line_cards_gradient m-auto mt-3 position_line_cards position-absolute"></div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-xl-3 col-sm-6 mt-3 mt-xl-0">
              <div className="px-4 pb-5 h-100 bg_black_1 border_radius_16 hover_cards position-relative">
                <div className="w_136 m-auto pt-3">
                  <img
                    className="w-100"
                    src={Scale_ease}
                    alt="Get started with IoT"
                  />
                </div>
                <p className="mb-0 text_white_1 fw-semibold pt-2 ff_semiBold_gilroy fs_md text-center">
                  Scale infinitely with ease
                </p>
                <p className="mb-0 text_gray_2 fw_medium fs_xsm pt-1 ff_medium_gilroy text-center">
                  Reach all business goals with a single connectivity partner.
                </p>
                <div className="line_cards_gradient m-auto mt-3 position-absolute position_line_cards"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TakeControl;
