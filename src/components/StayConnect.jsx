import React, { useEffect } from "react";
import stay_left_img from "../assets/img/svg/stay_left_img.svg";
import stay_right_img from "../assets/img/svg/stay_right_img.svg";
import AOS from "aos";
import "aos/dist/aos.css";
function StayConnect() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className=" bg-black py-5">
        <div className="container position-relative z_index_3">
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-offset="200"
            className="row">
            <div className="col-12">
              <div className=" d-flex flex-column align-items-center stay_box py-5  position-relative overflow-hidden z_index1">
                <h2 className=" ff_bold_gilroy fs_xl_2 text_white_1 p-0 m-0 text-center">
                  Stay connect wherever you go
                </h2>
                <p className=" ff_medium_gilroy fs_sm_2 text_white_2 p-0 m-0 pt-2 text-center max_w_665">
                  Buy an international eSIM card, stay connected wherever you
                  go, and avoid expensive phone bills.
                </p>
                <a
                  href="/"
                  className=" ff_montserrat fw_medium fs_xsm btn_1 transition_03 mt-5 hover_btn_getStarted">
                  Get started
                </a>
                <img
                  className="position-absolute start-0 bottom-0 left_img z_index-1 w_10"
                  src={stay_left_img}
                  alt="stay_left_img"
                />
                <img
                  className=" position-absolute top-0 end-0 z_index-1 w_10"
                  src={stay_right_img}
                  alt="stay_right_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StayConnect;
