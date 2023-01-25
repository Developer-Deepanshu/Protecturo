import React from 'react'
import takeControl_1 from '../assets/img/png/takeControl_1.png'
import takeControl_2 from '../assets/img/png/takeControl_2.png'
import takeControl_3 from '../assets/img/png/takeControl_3.png'
import takeControl_4 from '../assets/img/png/takeControl_4.png'

function TakeControl() {
    return (
        <>
            <div className='container my-5'>
                <p className='text-center bg_red_grad_1 fs_md ff_bold_gilroy fw-bold mb-0'>Our benefits</p>
                <h2 className='ff_bold_gilroy fw-bold fs_xl_2 text_white_1 m-auto mw_300 text-center'>Take control of
                    your cellular connectivity</h2>
                <p className='text-center mb-0 fw_medium fs_sm_2 text_gray_2 ff_medium_gilroy mw_760 m-auto mt-3'>Your creativity is endless. Your IoT project shouldn't be held
                    back by cellular connectivity. Let's build a new unicorn together.</p>
                <div className='row mt-5'>
                    <div className="col-3 ">
                        <div className='p-4 bg_black_1 border_radius_16 hover_cards h-100'>
                            <div className='w_136 m-auto pt-3'>
                                <img className='w-100' src={takeControl_1} alt="Get started with IoT" />
                            </div>
                            <p className='mb-0 text_white_1 fw-semibold ff_semiBold_gilroy fs_md text-center'>Get started with IoT</p>
                            <p className='mb-0 text_gray_2 fw_medium fs_xsm ff_medium_gilroy text-center'>Our experts helps you find the most suitable carrier profile for your deployment.</p>
                            <div className='line_cards_gradient m-auto mt-3'></div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className='p-4 bg_black_1 border_radius_16 hover_cards h-100'>
                            <div className='w_136 m-auto pt-3'>
                                <img className='w-100' src={takeControl_2} alt="Get started with IoT" />
                            </div>
                            <p className='mb-0 text_white_1 fw-semibold ff_semiBold_gilroy fs_md text-center'>Manage connectivity</p>
                            <p className='mb-0 text_gray_2 fw_medium fs_xsm ff_medium_gilroy text-center'>Control all of your IoT SIM cards
                                on a single platform.</p>
                            <div className='line_cards_gradient m-auto mt-3'></div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className='p-4 bg_black_1 border_radius_16 hover_cards h-100'>
                            <div className='w_136 m-auto pt-3'>
                                <img className='w-100' src={takeControl_3} alt="Get started with IoT" />
                            </div>
                            <p className='mb-0 text_white_1 fw-semibold ff_semiBold_gilroy fs_md text-center'>One global solution</p>
                            <p className='mb-0 text_gray_2 fw_medium fs_xsm ff_medium_gilroy text-center'>You will receive 1 invoice and have a single point of contact for support no matter where the SIMs are deployed.</p>
                            <div className='line_cards_gradient m-auto mt-3'></div>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className='p-4 h-100 bg_black_1 border_radius_16 hover_cards'>
                            <div className='w_136 m-auto pt-3'>
                                <img className='w-100' src={takeControl_4} alt="Get started with IoT" />
                            </div>
                            <p className='mb-0 text_white_1 fw-semibold ff_semiBold_gilroy fs_md text-center'>Scale infinitely with ease</p>
                            <p className='mb-0 text_gray_2 fw_medium fs_xsm ff_medium_gilroy text-center'>Reach all business goals with a single connectivity partner.</p>
                            <div className='line_cards_gradient m-auto mt-3'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TakeControl