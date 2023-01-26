import React, { useEffect } from "react";
import Protect_data from "../assets/img/svg/Protect_data.svg";
import Detect_Incidents from "../assets/img/svg/Detect_Incidents.svg";
import Security_shield from "../assets/img/svg/Security_shield.svg";
import Unlimited_data from "../assets/img/svg/Unlimited_data.svg";
import dot_left from "../assets/img/png/Features_left_Dots.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="py-5 position-relative" id="Features">
        <img
          className="w-50 start-50 bottom-0 position-absolute"
          src={dot_left}
          alt="red dots"
        />
        <img
          className="w-50 end-25 top-25 position-absolute"
          src={dot_left}
          alt="red dots"
        />
        <div className="container position-relative z_index_3">
          <div className="d-flex align-items-center flex-column">
            <p className="ff_bold_gilroy fw-bold fs_md bg_red_grad_1 p-0 m-0 text-center">
              Features
            </p>
            <h2 className="ff_bold_gilroy fw-bold fs_xl_2 text_white_2 p-0 m-0 text-center pt-1 max_w_893">
              Best-in-class Cyber safety for commercial and personal.
            </h2>
          </div>
          <div className="row pt-5 d-none d-sm-flex">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6 col-lg-4 col-xl-3">
              <div className="Features_box">
                <img src={Protect_data} alt="Protect_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Protect your data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6  col-lg-4 col-xl-3 mt-4 mt-sm-0">
              <div className="Features_box">
                <img src={Detect_Incidents} alt="Detect_Incidents" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Detect Incidents
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  At vero eos et accusamus et iusto odio dign era sue issimos
                  ducimus qui blanditiis praesentium vol uptatum deleniti atque
                  corrupti.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6  col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <div className="Features_box">
                <img src={Security_shield} alt="Security_shield" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Security shield
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" d-lg-none d-xl-flex col-sm-6  col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <div className="Features_box">
                <img src={Unlimited_data} alt="Unlimited_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Unlimited data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-4 justify-content-center d-none d-sm-flex">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6  col-lg-4 col-xl-3">
              <div className="Features_box">
                <img src={Security_shield} alt="Security_shield" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Stay connected
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6  col-lg-4 col-xl-3 mt-4 mt-sm-0">
              <div className="Features_box">
                <img src={Unlimited_data} alt="Unlimited_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  No extra charges
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  At vero eos et accusamus et iusto odio dign era sue issimos
                  ducimus qui blanditiis praesentium vol uptatum deleniti atque
                  corrupti.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6  col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <div className="Features_box">
                <img src={Security_shield} alt="Security_shield" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Live support
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              className=" col-sm-6  col-lg-4 col-xl-3 mt-4 mt-xl-0">
              <div className="Features_box">
                <img src={Detect_Incidents} alt="Detect_Incidents" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Destination plans
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  At vero eos et accusamus et iusto odio dign era sue issimos
                  ducimus qui blanditiis praesentium vol uptatum deleniti atque
                  corrupti.
                </p>
              </div>
            </div>
            <div className=" col-sm-6 d-none d-lg-flex d-xl-none  col-lg-4 col-xl-3 mt-4 mt-xl-0">
              <div className="Features_box">
                <img src={Unlimited_data} alt="Unlimited_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Unlimited data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
          </div>
          <Slider className=" d-sm-none pt-4" {...settings}>
            <div className="col-12 px-3">
              <div className="Features_box h-100">
                <img src={Protect_data} alt="Protect_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Protect your data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div className="col-12 px-3 ">
              <div className="Features_box h-100">
                <img src={Detect_Incidents} alt="Detect_Incidents" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Detect Incidents
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  At vero eos et accusamus et iusto odio dign era sue issimos
                  ducimus qui blanditiis praesentium vol uptatum deleniti
                  atque corrupti.
                </p>
              </div>
            </div>
            <div className="col-12 px-3 ">
              <div className="Features_box h-100">
                <img src={Security_shield} alt="Security_shield" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Security shield
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div className="col-12 px-3 ">
              <div className="Features_box h-100">
                <img src={Unlimited_data} alt="Unlimited_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Unlimited data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div className="col-12 px-3">
              <div className="Features_box h-100">
                <img src={Protect_data} alt="Protect_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Protect your data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div className="col-12 px-3 ">
              <div className="Features_box h-100">
                <img src={Detect_Incidents} alt="Detect_Incidents" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Detect Incidents
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  At vero eos et accusamus et iusto odio dign era sue issimos
                  ducimus qui blanditiis praesentium vol uptatum deleniti
                  atque corrupti.
                </p>
              </div>
            </div>
            <div className="col-12 px-3 ">
              <div className="Features_box h-100">
                <img src={Security_shield} alt="Security_shield" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Security shield
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
            <div className="col-12 px-3 ">
              <div className="Features_box h-100">
                <img src={Unlimited_data} alt="Unlimited_data" />
                <h4 className="ff_semiBold_gilroy fw-semibold fs_md text_gray_1 p-0 m-0 pt-4">
                  Unlimited data
                </h4>
                <p className=" ff_medium_gilroy fw_medium fs_xsm text_gray_2 p-0 m-0 pt-3">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid ex ea
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Features;
