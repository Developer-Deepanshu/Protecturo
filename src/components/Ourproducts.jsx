import React, { useEffect } from "react";
// import PropTypes from "prop-types";
import simcard from "../assets/img/svg/simcard.svg";
import red_cricle from "../assets/img/png/our_products_dots.png";
import esim from "../assets/img/svg/esim.svg";
import hotspot from "../assets/img/svg/hotspot.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Ourproducts = (props) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section
        className="bg-blackpy-4 py-md-5 position-relative z_index_3"
        id="Products">
        <img
          className="position-absolute start-0 red_circle_position_products z_index-1"
          src={red_cricle}
          alt="red_cricle"
        />
        <div className="container position-relative z_index_3">
          <p className="ff_bold_gilroy fs_md bg_red_grad_1 text-center mb-0">
            Our products
          </p>

          <h2 className="ff_bold_gilroy fs_xl text_white_1   w_852 mx-auto text-center ">
            Allow us to secure your data with Protecturo’s products
          </h2>
          <div className="row justify-content-center mt-5">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-md-6 col-xl-3 mb-4">
              <div className="hover_cards border_radius_16  bg_black_1 h-100 px-5 pt-4 pb-5 text-center d-flex flex-column justify-content-between">
                <img className="" src={simcard} alt="simcard" />
                <div className=" text-center ">
                  <h2 className="ff_semiBold_gilroy fs_md text_gray_1 mb-3">
                    SIM card
                  </h2>
                  <p className=" ff_bold_gilroy fs_xsm text_gray_2 mb-0 w_230 mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <a
                    className="text-white bg_getStarted_btn p_btn_nav
                     border_radius_60 fs_xsm fw_medium ff_montserrat
                    btn_hover_shadow mt-4 d-inline-block white_space"
                    href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-md-6 col-xl-3 mb-4">
              <div className="hover_cards border_radius_16  bg_black_1 h-100  px-5 pt-4 pb-5 text-center  d-flex flex-column justify-content-between">
                <img className="" src={esim} alt="simcard" />
                <div className=" text-center ">
                  <h2 className="ff_semiBold_gilroy fs_md text_gray_1 mb-3">
                    eSIM
                  </h2>
                  <p className=" ff_bold_gilroy fs_xsm text_gray_2 mb-0 w_230 mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <a
                    className="text-white bg_getStarted_btn p_btn_nav
                     border_radius_60 fs_xsm fw_medium ff_montserrat
                    btn_hover_shadow mt-4 d-inline-block white_space"
                    href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-md-6 col-xl-3 mb-4">
              <div className="hover_cards border_radius_16 bg_black_1 h-100 px-5 pt-4 pb-5 text-center  d-flex flex-column justify-content-between">
                <img className="" src={hotspot} alt="simcard" />
                <div className=" text-center ">
                  <h2 className="ff_semiBold_gilroy fs_md text_gray_1 mb-3 ">
                    Mobile Wifi Hotspot
                  </h2>
                  <p className=" ff_bold_gilroy fs_xsm text_gray_2 mb-0 w_230 mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <a
                    className="text-white bg_getStarted_btn p_btn_nav
                     border_radius_60 fs_xsm fw_medium ff_montserrat
                    btn_hover_shadow mt-4 d-inline-block white_space"
                    href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Ourproducts.propTypes = {};

export default Ourproducts;
