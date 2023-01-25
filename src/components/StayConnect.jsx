import React from "react";
import { Container } from "react-bootstrap";
import stay_left_img from "../assets/img/svg/stay_left_img.svg";
import stay_right_img from "../assets/img/svg/stay_right_img.svg";

function StayConnect() {
  return (
    <>
      <section className=" bg-black py-5">
        <Container>
          <div className="row">
            <div className="col-12">
              <div className=" d-flex flex-column align-items-center stay_box py-5 position-relative">
                <h2 className=" ff_bold_gilroy xl_2 text_white_1 p-0 m-0 text-center">
                  Stay connect wherever you go
                </h2>
                <p className=" ff_mediium_gilroy fs_sm_2 text_white_2 p-0 m-0 pt-2 text-center max_w_665">
                  Buy an international eSIM card, stay connected wherever you
                  go, and avoid expensive phone bills.
                </p>
                <a
                  href="/"
                  className=" ff_montserrat fw_medium fs_xsm btn_1 mt-5">
                  Get started
                </a>
                <img
                  className="position-absolute start-0 bottom-0"
                  src={stay_left_img}
                  alt="stay_left_img"
                />
                <img
                  className=" position-absolute top-0 end-0"
                  src={stay_right_img}
                  alt="stay_right_img"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default StayConnect;
