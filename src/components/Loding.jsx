import React from 'react'
import logo_loading from '../assets/img/png/logo_png.png'

function Loding() {
    return (
        <div>
            <div className='min-vh-100 bg-black loding_position'>
                <img className='w_xsm_50 w_sm_13 animation_loding' src={logo_loading} alt="loading" />
            </div>
        </div>
    )
}

export default Loding