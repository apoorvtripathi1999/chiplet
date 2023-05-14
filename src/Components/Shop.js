import React, { useEffect, useState } from 'react'
import '../CSS/shop.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const link = 'https://api.npoint.io/be666e0b6b2cb1df22c4'

export default function Shop() {

  var [data,setData] = useState([])
  var [filter,setFilter] = useState([])
  var newFilter = [...filter]
  var navigate = useNavigate()
  useEffect(()=>{
    axios.get(link).then((e)=>{setData(e.data)})
  },[filter])

  function deleteArr(arr,name)
  {
    return arr.filter((elem)=>{return elem !==name})
  }

  function handleFilter(action,name)
  {
     if(action === "checked")
     {
      newFilter.push(name)
      setFilter(newFilter)
     }
     if(action === "not checked")
     {
      newFilter = deleteArr(newFilter,name)
      setFilter(newFilter)
      console.log(filter,newFilter)
     }
  }
  return (
    <div className='shop-main'>
    <div className='shop-filter'>
    <div>
      <input type='text' placeholder='search for products' name='search'>
      </input>
      <h2>Filter</h2>
      <div className='filter-container'>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","Media")} className='filter-options'></input> Media </label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","USB")} className='filter-options'></input> USB</label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","MEMORY CARDS")} className='filter-options'></input> Memory Cards </label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","ADAFRUIT")} className='filter-options'></input> Adafruit</label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","ARDUINO")} className='filter-options'></input> Arduino</label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","RASPBERRY PI")} className='filter-options'></input> Raspberry Pi</label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","COMMUNICATIONS MODULES")} className='filter-options'></input> Communication Modules</label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","MICROCONTROLLER CHIPS")} className='filter-options'></input> Microcontroller Chips</label>
        <label> <input type='checkbox' onChange={(e)=>handleFilter( e.target.checked? "checked":"not checked","MISCELLANEOUS")} className='filter-options'></input> Missalanious</label>
      </div>
    </div>
    </div>
    <div className='shop-content'>

      {
         
         data.map((e) => {

          if (filter.includes(e.subcata)|| filter.length === 0) {
            return (
              <div className='collection-card'>
                <img src={e.imageurl} className='collection-card-img' alt='collection-card'></img>
                <h3 className='product-name'>{e.name}</h3>
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
