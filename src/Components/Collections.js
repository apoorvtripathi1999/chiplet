import React, { useEffect, useState } from 'react'
import '../CSS/collection.css'
import axios from 'axios';
var link = 'https://api.npoint.io/c49334b9015d64901fa4'
export default function Collection() {
    var [data,getData] = useState([])
    useEffect(()=>{
     axios.get(link).then((res)=>{getData(res.data)})
    },[])
    console.log(data)
  return (
    <div className='collection-main'>
     {
        data.map((e)=>{

            return (
                <div className='collecction-element' key={e.key}>
                    <img className='collection-img' src={e.image} alt='catagory-img'></img>
                    <h3>{e.name}</h3>
                </div>
            )
        })
     }
    </div>
  )
}
