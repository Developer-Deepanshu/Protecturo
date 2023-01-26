import React, { useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import pngegg from "../assets/img/png/pngegg.png";
import faq_dots from "../assets/img/png/faq_dots.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Faq() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <section className=" bg-black position-relative" id="Faq">
        <img
          className="w-75 z_index_1 position-absolute right_15_top_10 "
          src={faq_dots}
          alt="faq_dots"
        />
        <div className=" container py-5 z_index_3 position-relative">
          <div className="row flex-column-reverse align-items-center flex-xl-row justify-content-md-between">
            <div
              data-aos="zoom-in-right"
              data-aos-delay="300"
              data-aos-offset="200"
              className=" col-12  col-md-10 col-xl-6 my-lg-5">
              <p className=" ff_bold_gilroy fw-bold fs_md bg_red_grad_1 p-0 m-0 text-center text-xl-start">
                FAQs
              </p>
              <h2 className=" ff_bold_gilroy fw-bold fs_xl_2 text_white_2 p-0 m-0 pt-1 text-center text-xl-start">
                Some useful answers
              </h2>
              <Accordion
                className=" d-flex flex-column gap-4 mt-5"
                defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    what are the main objectives of cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What are the three types of cyber threats?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How can you protect yourself from cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    What would happen without cyber security?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is cyber security a social or governance issue?
                  </Accordion.Header>
                  <Accordion.Body>
                    At vero eos et accusamus et iusto odio dign era sue issimos
                    ducimus qui blanditiis praesentium vol uptatum deleniti
                    atque corrupti.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-delay="300"
              data-aos-offset="200"
              className=" col-8 col-sm-8 col-md-6 mb-4 mb-lg-0 col-xl-5">
              <img className=" w_100  pos_pngegg " src={pngegg} alt="pngegg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
