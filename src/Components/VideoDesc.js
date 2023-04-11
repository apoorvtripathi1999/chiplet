import React from 'react'
import '../CSS/home.css'
import video from '../Images/home/video.gif'

export default function VideoDesc() {
    return (
        <div className='video-desc-main'>
            <img className='video' src={video} alt='video for the product'></img>
            <div className='side-desc'>
                <h2>Performance, without any extra bulk!!!</h2>
                <p>Build projects with best in class electronics, and make this world a <b>BETTER PLACE</b></p>
            </div>
        </div>
    )
}
