import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
var link = 'https://api.npoint.io/be666e0b6b2cb1df22c4'
export default function Productpage() {
    var {uid} = useParams()
    var [data,getData] = useState([])

    
    useEffect(()=>{
        axios.get(link).then((res)=>{getData(res.data)})
    },[])
  
  return (
    <div>
    
    {
       data.map((e)=>{
           console.log(typeof(e.uid),typeof(uid))
        if(parseInt(e.uid) === parseInt(uid))
        {

        return(

            <div>
                <div>
                    <img src={e.imageurl} alt='product'></img>
                </div>
                <div>jj</div>
            </div>

        )}
        else
        {
            return null
        }
       })
    
    }
    </div>
  )
}
