import React, { useState } from 'react'

function NavBar() {
    const [open, setclose] = useState(false);

    return (
        <>
            <nav>
                <div className="container">
                    <div className=" d-flex align-items-md-center justify-content-between  flex-md-row flex-column  py-3">
                        <div className=" d-flex align-items-center justify-content-between">
                            <a href="#">Page-logo</a>
                            <button
                                // onClick={() => setclose(true)} //togal
                                onClick={() => setclose(!open)} //togal
                                className=" d-flex flex-column d-md-none bg-transparent border-0 position-relative z_index_5
                                 nav_btn_lines"
                            >
                                <span className="line"></span>
                                <span className="my-2 line"></span>
                                <span className="line"></span>
                            </button>
                        </div>
                        <div className={open ? "ms-0 nav_open " : "nav_open ms_100"}>
                            <ul className="d-flex align-items-center h-100 justify-content-center justify-content-md-between flex-md-row flex-column gap-4 mb-0 ps-0">
                                <li>
                                    <a className="text-white" href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="#">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="#">
                                        Roadmap
                                    </a>
                                </li>
                                <li>
                                    <a className="text-white" href="#">
                                        Roadmap
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