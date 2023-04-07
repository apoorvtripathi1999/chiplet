import React, {useEffect, useState} from 'react'
import '../CSS/home.css'

export default function Description() {

  const [percent,setPercent] = useState()
  const [index,setIndex] = useState(0)
  const arr = ["0%","25%","50%","75%","100%"]
  let [stateArr,setStatearr] = useState(["active", "inactive","inactive","inactive","inactive"])
 
  const progressInterval = setInterval(updateProg, 2000)

  function updateProg () {
      if(index===5)
      {
        clearInterval(progressInterval)
        setIndex(0)
        return;
      }
      switch (index)
      {
         case 0: setStatearr(["active", "inactive","inactive","inactive","inactive"]) ; console.log("changed 1"); break; 
         case 1: setStatearr(["inactive", "active","inactive","inactive","inactive"]) ; console.log("changed 2"); break;
         case 2: setStatearr(["inactive", "inactive","active","inactive","inactive"]) ; console.log("changed 3"); break;
         case 3: setStatearr(["inactive", "inactive","inactive","active","inactive"]) ; console.log("changed 4"); break;
         case 4: setStatearr(["inactive", "inactive","inactive","inactive","active"]) ; console.log("changed 5"); break;
         default: return stateArr
      }
      const nextProgress = arr[index]
      setPercent(nextProgress)
      setIndex(index+1)
      // console.log(arr[index])
  }

  useEffect(()=>
  {
    
  },[percent])


  return (
    <div className='description-main'> 
    <div className='progress-container'>
      <div className='progress-bar' style={{width:`${percent}`}}></div>
      <div className='progress-section' id={`${stateArr[0]}`}></div>
      <div className='progress-section' id={`${stateArr[1]}`}></div>
      <div className='progress-section' id={`${stateArr[2]}`}></div>
      <div className='progress-section' id={`${stateArr[3]}`}></div>
      <div className='progress-section' id={`${stateArr[4]}`}></div>
    </div>
    </div>
  )
}
