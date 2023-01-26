import React from "react";
import global from "../assets/img/png/global.png";
import phone from "../assets/img/png/phone_instant_connectivity.png";
const Solutions = () => {
  return (
    // <section id="Apps" className="styling  ">
    //   <div className="container my-5 ">
    //     <div className="bg_black_1 pt-5 ">
    //       <div className="row flex-column flex-xl-row align-items-end">
    //         <div className="col-xxl-4 col-xl-5 col-lg-9 position-relative m_max_xxl_auto mb-4 mb-xl-0">
    //           <div className="  m-auto position_xxl_absolute bottom-0">
    //             <img className="w-100 h-100" src={phone} alt="phone" />
    //           </div>
    //         </div>
    //         <div className="col-xxl-8 col-xl-7 col-lg-9">
    //           <div className="text-center text-xl-start my-4 pb-5 ps-5 ">
    //             <h2 className="ff_bold_gilroy fs_xl text_white_1">
    //               Global IoT connectivity to deploy and scale your solutions
    //             </h2>
    //             <p className=" ff_bold_gilroy text_gray_2 mb-0 fs_sm mt-3">
    //               If you're serious about getting your IoT build off the ground
    //               - Protecturo is ready to make it quick, frictionless and
    //               smart. Get started today with a free SIM & data, or explore
    //               enterprise options with our team of IoT experts.
    //             </p>
    //             <a
    //               className="text-white bg_getStarted_btn p_btn_nav
    //                   border_radius_60 fs_xsm fw_medium ff_montserrat
    //                  btn_hover_shadow mt-4 d-inline-block"
    //               href="#"
    //             >
    //               Learn more
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="bg_black_1 my-5 ">
      <div className="container position-relative z_index_3">
        <div className="row">
          <div className="col-12 col-xl-4 position_xl_relative">
            <div className="w_97 mx_xl_auto position_xl_absolute position_phones d-flex justify-content-center justify-content-xl-center">
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
                href="#"
              >
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
