import React, { useState } from 'react'
import logo_svg from '../assets/img/svg/logo_svg.svg'
import $ from 'jquery';

function NavBar() {
    const [open, setclose] = useState(false);
    if (open) {
        document.body.classList.add("overflow-hidden")
    }
    else {
        document.body.classList.remove("overflow-hidden")
    }
    $(document).ready(function () {
        $(".hamburger").click(function () {
            $(this).toggleClass("is-active");
        });
    });


    return (
        <>
            <nav>
                <div className="container">
                    <div className=" d-flex align-items-lg-center justify-content-between flex-lg-row flex-column  py-3">
                        <div className=" d-flex align-items-center justify-content-between">
                            <a href="#" className='d-inline-block w_xsm_50'>
                                <img className='w-100' src={logo_svg} alt="logo" /></a>
                            <button
                                onClick={() => setclose(true)}
                                className=" d-flex flex-column d-lg-none bg-transparent
                                 border-0 position-relative  nav_btn_lines">
                                <span className="nav_bnt_line"></span>
                                <span className="my-2 nav_bnt_line"></span>
                                <span className="nav_bnt_line"></span>
                            </button>
                        </div>
                        <div className={open ? "ms-0 nav_open " : "nav_open ms_100"}>
                            <ul className="d-flex align-items-center min_vh_max_lg
                             justify-content-center justify-content-lg-between
                              flex-lg-row flex-column gap-4 mb-0 ps-0">
                                <li>
                                    <a className="text_gray_1 fw-semibold nav_btn fs_xsm_2 ff_semiBold_gilroy" href="#Benefits" onClick={() => setclose(false)}>
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold nav_btn fs_xsm_2 ff_semiBold_gilroy" href="#Privacy" onClick={() => setclose(false)}>
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold nav_btn fs_xsm_2 ff_semiBold_gilroy" href="#Products" onClick={() => setclose(false)}>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold nav_btn fs_xsm_2 ff_semiBold_gilroy" href="#Apps" onClick={() => setclose(false)}>
                                        App
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold nav_btn fs_xsm_2 ff_semiBold_gilroy" href="#Features" onClick={() => setclose(false)}>
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold nav_btn fs_xsm_2 ff_semiBold_gilroy" href="#Faq" onClick={() => setclose(false)}>
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white bg_getStarted_btn p_btn_nav
                                     border_radius_60 fs_xsm fw_medium ff_montserrat
                                    btn_hover_shadow" href="#">
                                        Get started
                                    </a>
                                </li>
                            </ul>
                            {/* <button className='end_20 d-lg-none top_20 p-4 z_index_3 btn btn-close clr_white position-absolute bg-light' onClick={() => setclose(false)}></button> */}
                            <div className="three col d-lg-none z_index_3 position-absolute top_20 end_20" onClick={() => setclose(false)}>
                                <div className="hamburger" id="hamburger-1">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar