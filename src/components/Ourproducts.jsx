import React from "react";
import PropTypes from "prop-types";
import simcard from "../assets/img/svg/simcard.svg";
import { Container } from "react-bootstrap";
const Ourproducts = (props) => {
  return (
    <>
      <section className="bg-black">
        <Container>
          <p className="ff_bold_gilroy fs_md bg_red_grad_1 text-center">
            Our products
          </p>
          <h2 className="ff_bold_gilroy xl_2 text_white_2 text-center ">
            Allow us to secure your data with Protecturo’s products
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
              <div>
                <img src={simcard} alt="simcard" />
                <h2>SIM card</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="col-md-6 col-lg-3"></div>
            <div className="col-md-6 col-lg-3"></div>
          </div>
        </Container>
      </section>
    </>
  );
};

Ourproducts.propTypes = {};

export default Ourproducts;
