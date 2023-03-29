import React from 'react'
import '../CSS/home.css'
import arduino from '../Images/home/arduino_intro.png'
import '../CSS/transitions.css'

export default function intro() {
    return (
        <div className='intro'>
            <div className='intro-main'>
                <div className='intro-heading'>
                    <h1 className='web-title'>CHIPLET/</h1>
                    <h2>A MARKETPLACE FOR ALL YOUR ELECTRONICS</h2>
                </div>
                <div>
                    <h4 className='fadein left-text'>High processing power,<br /> which enables quick and <br />efficient execution of <br />complex instructions.</h4>
                    <h4 className='fadein left-text'>Minimized power usage <br />while still providing the <br />necessary performance.</h4>
                </div>
                <div>
                    <img src={arduino} className="arduino-img rotation"></img>
                </div>
                <div>
                    <h4 className='fadein left-text'>Range of connectivity options<br />that make it easy to integrate<br />with other devices and systems.</h4>
                </div>
            </div>
            <div className='scroll-nav fadeinlong'>
                    <a>Discover How We Do It</a>
                    <p>⇣⇣⇣</p>
            </div>
        </div>
    )
}
