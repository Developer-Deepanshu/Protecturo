import React from "react";
import logo from "../assets/img/png/logo.png";
import telegram from "../assets/img/svg/telegram.svg";
import facebook from "../assets/img/svg/facebook.svg";
import instagram from "../assets/img/svg/instagram.svg";
import twitter from "../assets/img/svg/twitter.svg";
const Footer = () => {
  return (
    <section className="py-md-5 z_index">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="text-center text-lg-start my-4">
              <img src={logo} alt="logo" />
              <p className=" mb-0 mt-3 ff_bold_gilroy fs_xsm text_gray_2 ">
                Lorem ipsum dolor sits amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nis commodo consequat.
              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-4 my-5">
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
          <div className="col-12 col-lg-8">
            <div className="row justify-content-center">
              <div className="col-6 col-md-3 ">
                <div className="text-center text-lg-start ">
                  <h2 className="ff_bold_gilroy text_white_2 ">Products</h2>
                  <ul className="ps-0 mt-4">
                    <li>
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        eSIM{" "}
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        SIM Card
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
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
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        About
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Ventures
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Grants
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
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
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Support
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Center
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        FAQs
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Partners
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Blogs
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
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
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Profile
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Favorites
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        Watchlist
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
                      >
                        My Collections
                      </a>
                    </li>
                    <li className="mt-2">
                      <a
                        href="#"
                        className="ff_semiBold_gilroy fs_xsm text_gray_2 "
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
        <div className="d-flex align-center justify-content-between">
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
