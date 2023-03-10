import React, { useEffect } from "react";
import ourStandars from "../assets/img/png/our_standars.png";
import AOS from "aos";
import "aos/dist/aos.css";

function OurStandars() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section id="Privacy">
        <div className="container py-5">
          <div className="row flex-column flex-xl-row">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-xl-6 col-9 col-md-8 m-auto">
              <img
                className="w-100 p-xl-4"
                src={ourStandars}
                alt="ourStandars"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-offset="200"
              className="col-xl-6 col-md-10 m-auto">
              <p className="bg_red_grad_1 fs_md ff_bold_gilroy fw-bold mb-0 text-center text-xl-start mt-5 mt-xl-0">
                Our standards
              </p>
              <h2 className="ff_bold_gilroy fw-bold  text_white_1 fs_xl_2 text-center text-xl-start">
                Privacy standards not seen before in telecom
              </h2>
              <p className="ff_medium_gilroy fw_medium pt-2 fs_xsm_2 text_gray_2 text-center text-xl-start">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p className="ff_medium_gilroy fw_medium fs_xsm_2 text_gray_2 text-center text-xl-start">
                Your personal information is 100% safe with us, because we do
                not require any personal information besides email. Of course no
                contracts, no credit checks and no fine prints. To protect your
                privacy online, our data plans come with a Privacy IP address.
              </p>
              <div className="text-center text-xl-start mt-5">
                <a
                  className="text-white bg_getStarted_btn p_btn_nav
                  border_radius_60 fs_xsm fw_medium ff_montserrat btn_hover_shadow"
                  href="#">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurStandars;
