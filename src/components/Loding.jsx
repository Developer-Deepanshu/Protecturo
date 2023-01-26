import React from 'react'
import logo_loading from '../assets/img/png/logo_png.png'

function Loding() {
    return (
        <div>
            <div className='min-vh-100 bg-black loding_position'>
                <div className=''>
                    <img className='w-100 animation_loding' src={logo_loading} alt="loading" />
                </div>
            </div>
        </div>
    )
}

export default Loding