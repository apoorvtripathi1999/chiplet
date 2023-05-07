import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../CSS/collection.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

var link = 'https://api.npoint.io/be666e0b6b2cb1df22c4'

export default function CollectComp(params) {
  var { name } = useParams()
  var [data, getData] = useState([])
  name = name.toUpperCase()
  var navigate = useNavigate()
  useEffect(() => {
    axios.get(link).then((res) => { getData(res.data) })
  }, [])
  console.log(data, name)
  return (
    <div className='collect'>
      <div>
        <h1 className='collection-heading'>{name}</h1>
      </div>
      <div className='collection-grid-container'>
        {

          data.map((e) => {

            if (e.catagory === name) {
              return (
                <div className='collection-card'>
                  <img src={e.imageurl} className='collection-card-img' alt='collection-card'></img>
                  <h3>{e.name}</h3>
                  <h2 className='price'>{e.price} $</h2>
                  <button className='prod-btn'
                    onClick={() => {
                      navigate(`/products/${e.uid}`)
                    }}
                  >Check Out</button>
                </div>
              )
            }
            else {
              return null
            }

          })

        }
      </div>
    </div>
  )
}
