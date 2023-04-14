import React from 'react'
import '../CSS/home.css'
export default function Slider() {
    return (
        <div>
            <div className='slider-main'>
                <div className='slider-element element1'>
                    <div className='slider-inner'>
                        <img className='slider-image' alt='random - 1'></img>
                        <p>randomrandomrandomrandom</p>
                    </div>
                    <div className='slider-inner'>
                        <img className='slider-image' alt='random - 1'></img>
                        <p>randomrandomrandomrandom</p>
                    </div>
                </div>
                <div className='slider-element element2'>
                    <div className='slider-inner'>
                        <img className='slider-image' alt='random - 1'></img>
                        <p>randomrandomrandomrandom</p>
                    </div>
                    <div className='slider-inner'>
                        <img className='slider-image' alt='random - 1'></img>
                        <p>randomrandomrandomrandom</p>
                    </div>
                </div>
            </div>
            <div className='slider-control'>
                <div className='slider-button active'></div>
                <div className='slider-button'></div>
            </div>
        </div>
    )
}
