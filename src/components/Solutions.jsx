import React from "react";
import global from "../assets/img/png/global.png";

const Solutions = () => {
  return (
    <section className="bg_black_1 my-5 ">
      <div className="container position-relative z_index_3">
        <div className="row flex-column-reverse flex-xl-row justify-content-center">
          <div className="col-12 col-sm-9 mx_auto_sm  col-xl-4 position_xl_relative">
            <div
              className="w_97 mx_xl_auto position_xl_absolute position_phones d-flex justify-content-center
             justify-content-xl-center">
              <img className="w-100" src={global} alt="global" />
            </div>
          </div>
          <div className="col-12 col-xl-8 py-5">
            <div className="text-center text-xl-start ">
              <h2 className="ff_bold_gilroy fs_xl text_white_1">
                Global IoT connectivity to deploy and scale your solutions
              </h2>
              <p className=" ff_bold_gilroy text_gray_2 mb-0 fs_sm mt-3">
                If you're serious about getting your IoT build off the ground -
                Protecturo is ready to make it quick, frictionless and smart.
                Get started today with a free SIM & data, or explore enterprise
                options with our team of IoT experts.
              </p>
            </div>
            <div className="text-center text-xl-start mt-5">
              <a
                className="text-white bg_getStarted_btn p_btn_nav border_radius_60 fs_xsm fw_medium ff_montserrat btn_hover_shadow"
                href="#">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
