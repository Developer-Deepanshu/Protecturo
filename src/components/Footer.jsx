import React from "react";
import logo from "../assets/img/png/logo.png";
import telegram from "../assets/img/svg/telegram.svg";
import facebook from "../assets/img/svg/facebook.svg";
import instagram from "../assets/img/svg/instagram.svg";
import twitter from "../assets/img/svg/twitter.svg";
const Footer = () => {
  return (
    <section className="py-lg-5 ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-4">
            <div className="text-center text-xl-start mb-4">
              <img src={logo} alt="logo" />
              <p className=" mb-0 mt-3 ff_bold_gilroy fs_xsm text_gray_2  ">
                Lorem ipsum dolor sits amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nis commodo consequat.
              </p>
              <div className="d-xl-flex align-items-center justify-content-center justify-content-xl-start gap-4 my-5 d-none ">
                <a
                  href="https://telegr.am/user_mgt/login"
                  className="style"
                  target="_blank"
                >
                  <img src={telegram} alt="telegram" />
                </a>
                <a
                  href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804923%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804923&key"
                  className="style"
                  target="_blank"
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://www.google.com/search?q=instagram+login&oq=insta&aqs=chrome.1.69i57j69i59l2j0i131i433i512l3j0i67j5.1893j0j7&sourceid=chrome&ie=UTF-8"
                  className="style"
                  target="_blank"
                >
                  <img src={instagram} alt="instagram" />
                </a>
                <a
                  href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                  className="style"
                  target="_blank"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8 ">
            <div className="row justify-content-center">
              <div className="col-6 col-md-3 ">
                <div className="text-center text-lg-start ">
                  <h2 className="ff_bold_gilroy text_white_2 ">Products</h2>
                  <ul className="ps-0 mt-4">
                    <li>
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        eSIM{" "}
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        SIM Card
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Wifi HotSopt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 ">
                <div className="text-center text-lg-start ">
                  <h2 className="ff_bold_gilroy text_white_2 ">Company</h2>
                  <ul className="ps-0 mt-4">
                    <li>
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        About
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Ventures
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Grants
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Docs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 ">
                {" "}
                <div className="text-center text-lg-start ">
                  <h2 className="ff_bold_gilroy text_white_2 ">Resources</h2>
                  <ul className="ps-0 mt-4">
                    <li>
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Support
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Center
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Partners
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Updates & News
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-3 ">
                {" "}
                <div className="text-center text-lg-start ">
                  <h2 className="ff_bold_gilroy text_white_2 ">My Account</h2>
                  <ul className="ps-0 mt-4">
                    <li>
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Favorites
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Watchlist
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        My Collections
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 footer_btn"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-xl-start gap-4 my-5 d-xl-none ">
          <a
            href="https://telegr.am/user_mgt/login"
            className="style"
            target="_blank"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804923%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804923&key"
            className="style"
            target="_blank"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.google.com/search?q=instagram+login&oq=insta&aqs=chrome.1.69i57j69i59l2j0i131i433i512l3j0i67j5.1893j0j7&sourceid=chrome&ie=UTF-8"
            className="style"
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
            className="style"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>

        <div className="d-flex align-center justify-content-between text-center text-xl-start ">
          <p className=" mb-0 mt-3 ff_bold_gilroy fs_xsm text_gray_2 ">
            © 2022 Protecturo, All rights reserved.{" "}
          </p>
          <p className=" mb-0 mt-3 ff_bold_gilroy fs_xsm text_gray_2 ">
            Privacy Policy • Terms & Conditions{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
