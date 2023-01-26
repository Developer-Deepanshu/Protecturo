import React, { useEffect } from "react";
import googlePlay from "../assets/img/png/googlePlay.png";
import appleStore from "../assets/img/png/appStore.png";
import phone_instant_connectivity from "../assets/img/png/phone_instant_connectivity.png";
import AOS from "aos";
import "aos/dist/aos.css";

function InstantConnectivity() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section id="Apps">
        <div className="container my-5 pt-5">
          <div className="bg_black_1 p-5 position-relative z_index_3">
            <div className="row flex-column-reverse flex-xxl-row">
              <div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="200"
                className="col-xxl-6 col-lg-9 m-auto">
                <h2 className="ff_bold_gilroy fw-bold  text_white_1 fs_xl_2 text-center text-xl-start">
                  Instant connectivity with the Protecturo app
                </h2>
                <p className="fw_medium text_gray_2 fs_sm_2 pt-2 ff_medium_gilroy text-center text-xxl-start">
                  The ideal for the 21st century roadwarrior. The Protecturo app
                  lets you to grab a single data plan where and when you want -
                  at home or in any of our 190+ destinations. Select a plan from
                  the app, download an{" "}
                  <span className="fw-bold ff_bold_gilroy bg_red_grad_1">
                    eSIM
                  </span>
                  , and you'll connect on the spot, on physical SIM card
                  required.
                </p>
                <div className="d-flex justify-content-center mt-4 justify-content-xxl-start">
                  <a href="#" className="d-inline-block">
                    <img className="w-100" src={googlePlay} alt="googlePlay" />
                  </a>
                  <a href="#" className="ms-3 d-inline-block">
                    <img className="w-100" src={appleStore} alt="appleStore" />
                  </a>
                </div>
              </div>
              <div
                data-aos-delay="300"
                data-aos-offset="200"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="col-xl-6 col-lg-9 position-relative m_max_xxl_auto mb-4 mb-xl-0">
                <div className="w_85 w_full_hd_100 m-auto position_xxl_absolute position_phone">
                  <img
                    className="w-100 h-100"
                    src={phone_instant_connectivity}
                    alt="phone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default InstantConnectivity;
