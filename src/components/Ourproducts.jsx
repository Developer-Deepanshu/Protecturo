import React from "react";
import PropTypes from "prop-types";
import simcard from "../assets/img/svg/simcard.svg";
import { Container } from "react-bootstrap";
const Ourproducts = (props) => {
  return (
    <>
      <section>
        <Container>
          <p className="ff_gilroy fs_md">Our products</p>
          <h2>Allow us to secure your data with Protecturo’s products</h2>
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
