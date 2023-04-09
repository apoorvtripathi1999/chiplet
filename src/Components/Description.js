import React, { useEffect, useState } from 'react'
import '../CSS/home.css'
import '../CSS/transitions.css'
import arduinoDesc from '../Images/home/arduino_desc.png'
import sensor from '../Images/home/sensor.png'
import resistor from '../Images/home/resistor.png'
import connector from '../Images/home/connectors.png'



export default function Description() {

  const [percent, setPercent] = useState("0%")
  const [index, setIndex] = useState(0)
  const [btn,setBtn] = useState("hidden")
  const arr = ["25%", "50%", "75%", "100%"]


  const progressInterval = setInterval(updateProg, 2000)

  function updateProg() {

    const nextProgress = arr[index]
    setPercent(nextProgress)
    setIndex(index + 1)

    if (index === 4) {
      clearInterval(progressInterval)
      setIndex(0)
      setPercent("0%")
      setBtn("visible")
      return;
    }
    console.log(index, percent)

  }

  useEffect(() => {

  }, [index])


  return (
    <div className='description-main'>

      <div className='progress-items-container'>

        <div className='progress-item' id={index >= 1 ? "active" : "inactive"}>
          <div className='description-img-div'>
            <img src={arduinoDesc} alt='Not Found' className='description-img'></img>
          </div>
          <h3 className='desc-text'>Microconrollers and Electronic chips</h3>
        </div>

        <div className='progress-item' id={index >= 2 ? "active" : "inactive"}>
          <div className='description-img-div'>
            <img src={sensor} alt='Not Found' className='description-img'></img>
          </div>
          <h3 className='desc-text'><a href='https://www.aiea.in/' target='_blank' rel='noreferrer'>AIEA </a>approved sensors</h3>
        </div>

        <div className='progress-item' id={index >= 3 ? "active" : "inactive"}>
          <div className='description-img-div'>
            <img src={resistor} alt='Not Found' className='description-img'></img>
          </div>
          <h3 className='desc-text'>Passive Components</h3>
        </div>

        <div className='progress-item' id={index > 3 ? "active" : "inactive"}>
          <div className='description-img-div'>
            <img src={connector} alt='Not Found' className='description-img'></img>
          </div>
          <h3 className='desc-text'>Wirings and Connectors</h3>
        </div>

      </div>

      <div className='desc-btn-div'>
        <button className='desc-btn btn fadein' style={{visibility:`${btn}`}}>Check Out Collection</button>
      </div>

      <div className='progress'>
      <div className='progress-container'>
        <div className='progress-bar' style={{ width: `${percent}` }}></div>
        <div className='progress-section' id={index === 0 ? "active" : "inactive"}></div>
        <div className='progress-section' id={index === 1 ? "active" : "inactive"}></div>
        <div className='progress-section' id={index === 2 ? "active" : "inactive"}></div>
        <div className='progress-section' id={index === 3 ? "active" : "inactive"}></div>
        <div className='progress-section' id={index === 4 ? "active" : "inactive"}></div>
      </div>
      </div>

    </div>
  )
}
