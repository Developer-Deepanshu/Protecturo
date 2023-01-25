import React, { useEffect } from "react";
import PropTypes from "prop-types";
import simcard from "../assets/img/svg/simcard.svg";
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
      <section className="bg-blackpy-4 py-md-5" id="Products">
        <div className="container">
          <p className="ff_bold_gilroy fs_md bg_red_grad_1 text-center mb-0">
            Our products
          </p>

          <h2 className="ff_bold_gilroy fs_xl text_white_1   w_852 mx-auto text-center ">
            Allow us to secure your data with Protecturo’s products
          </h2>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="row justify-content-center mt-5">
            <div className="col-md-6 col-xl-3 mb-4">
              <div className="hover_cards border_radius_16  bg_black_1 h-100 px-5 pt-4 pb-5 text-center">
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
                    btn_hover_shadow mt-4 d-inline-block"
                    href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3 mb-4">
              <div className="hover_cards border_radius_16  bg_black_1 h-100  px-5 pt-4 pb-5 text-center">
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
                    btn_hover_shadow mt-4 d-inline-block"
                    href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 mb-4">
              <div className="hover_cards border_radius_16 bg_black_1 h-100 px-5 pt-4 pb-5   text-center">
                <img className="" src={hotspot} alt="simcard" />
                <div className=" text-center ">
                  <h2 className="ff_semiBold_gilroy fs_md text_gray_1 mb-3 white_space">
                    Mobile Wifi
                  </h2>
                  <p className=" ff_bold_gilroy fs_xsm text_gray_2 mb-0 w_230 mx-auto">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                  <a
                    className="text-white bg_getStarted_btn p_btn_nav
                     border_radius_60 fs_xsm fw_medium ff_montserrat
                    btn_hover_shadow mt-4 d-inline-block"
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
