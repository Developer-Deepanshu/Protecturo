import React, { useState } from 'react'
import logo_svg from '../assets/img/svg/logo_svg.svg'

function NavBar() {
    const [open, setclose] = useState(false);

    return (
        <>
            <nav>
                <div className="container">
                    <div className=" d-flex align-items-lg-center justify-content-between flex-lg-row flex-column  py-3">
                        <div className=" d-flex align-items-center justify-content-between">
                            <a href="#"><img className='w-100' src={logo_svg} alt="logo" /></a>
                            <button
                                onClick={() => setclose(!open)}
                                className=" d-flex flex-column d-lg-none bg-transparent
                                 border-0 position-relative z_index_5 nav_btn_lines "
                            >
                                <span className="line"></span>
                                <span className="my-2 line"></span>
                                <span className="line"></span>
                            </button>
                        </div>
                        <div className={open ? "ms-0 nav_open " : "nav_open ms_100"}>
                            <ul className="d-flex align-items-center h-100
                             justify-content-center justify-content-lg-between
                              flex-lg-row flex-column gap-4 mb-0 ps-0">
                                <li>
                                    <a className="text_gray_1 fw-semibold fs_xsm_2 ff_semiBold_gilroy" href="#">
                                        Benefits
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold fs_xsm_2 ff_semiBold_gilroy" href="#">
                                        Privacy
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold fs_xsm_2 ff_semiBold_gilroy" href="#">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold fs_xsm_2 ff_semiBold_gilroy" href="#">
                                        App
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold fs_xsm_2 ff_semiBold_gilroy" href="#">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a className="text_gray_1 fw-semibold fs_xsm_2 ff_semiBold_gilroy" href="#">
                                        FAQs
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white bg_getStarted_btn p_btn_nav
                                     border_radius_60 fs_xsm fw_medium ff_medium_gilroy" href="#">
                                        Get started
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar