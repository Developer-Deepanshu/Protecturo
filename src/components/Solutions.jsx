import React from "react";
import phone from "../assets/img/png/phone.png";
const Solutions = () => {
  return (
    <section className="styling   my-5 ">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-12 col-lg-4 position_lg_relative text-center text-lg-start">
            <div className="position_lg_absolute left_top width">
              <img className="w-100" src={phone} alt="phone" />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="text-center text-lg-start my-4">
              <h2 className="ff_bold_gilroy xl  text_white_1   ">
                Global IoT connectivity to deploy and scale your solutions
              </h2>
              <p className=" ff_bold_gilroy text_gray_2 mb-0 fs_sm mt-3">
                If you're serious about getting your IoT build off the ground -
                Protecturo is ready to make it quick, frictionless and smart.
                Get started today with a free SIM & data, or explore enterprise
                options with our team of IoT experts.
              </p>
              <button className="btns transition text_white_1 mx-auto mt-4">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
