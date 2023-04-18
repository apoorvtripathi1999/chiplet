import React, { useEffect, useState } from 'react'
import slide1 from '../Images/home/slide1.jpg'
import slide2 from '../Images/home/slide2.jpg'
import slide3 from '../Images/home/slide3.jpg'
import slide4 from '../Images/home/slide4.jpg'
export default function Slider() {
    var [change, setChange] = useState("50%")
    function handleNext() {
        setChange("50%")
    }
    function handlePrev() {
        setChange("-50%")
    }
    useEffect(() => {

    }, [change])
    return (
        <div className='slider-main'>
            <div className='slider-window'>
                <div className='slider' style={{ transform: `translateX(${change})`, transition: "2s ease" }}>
                    <div className='slide'>
                        <div className='slider-inner'>
                            <img className='slider-image' src={slide1} alt='random - 1'></img>
                            <p>Made from premium, environmentally certified base, that only gets better with age...</p>
                        </div>
                        <div className='slider-inner'>
                            <img className='slider-image' src={slide2} alt='random - 1'></img>
                            <p>and fewer plastic, to provide a high quality finish...</p>
                        </div>
                    </div>
                    <div className='slide'>
                        <div className='slider-inner'>
                            <img className='slider-image' src={slide3} alt='random - 2'></img>
                            <p>their clever design features help keep them slim…</p>
                        </div>
                        <div className='slider-inner'>
                            <img className='slider-image' src={slide4} alt='random - 2'></img>
                            <p>so they'll be with you from Day One to Day 1000, and beyond.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='button-container'>
                <div className={change === "50%"? "slider-buttons-act":"slider-buttons"} onClick={handleNext}></div>
                <div className={change === "-50%"? "slider-buttons-act":"slider-buttons"} onClick={handlePrev}></div>
            </div>
        </div>
    )
}
//className={change === "50%"? "slider-buttons-active": "slider-buttons"}