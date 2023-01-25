import React from 'react'
import logo_loading from '../assets/img/png/logo_png.png'

function Loding() {
    return (
        <div>
            <div className='min-vh-100 bg-black loding_position'>
                <div className='animation_loding'>
                    <img className='w-100' src={logo_loading} alt="loading" />
                </div>
            </div>
        </div>
    )
}

export default Loding