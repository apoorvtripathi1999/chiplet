import React, { useEffect, useState } from 'react'
import '../CSS/collection.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
var link = 'https://api.npoint.io/bbc0e838198719f359c7'
export default function Collection() {
    var [data,getData] = useState([])
    useEffect(()=>{
     axios.get(link).then((res)=>{getData(res.data)})
    },[])
    console.log(data)
   var navigate = useNavigate()
  return (
    <div className='collection-main'>
     {
        data.map((e)=>{

            return (
                <div className='collecction-element' key={e.key} onClick={()=>{
                  navigate(`/collection/${e.name}`)
                }}>
                    <img className='collection-img' src={e.image} alt='catagory-img'></img>
                    <h3>{e.name}</h3>
                </div>
            )
        })
     }
    </div>
  )
}
