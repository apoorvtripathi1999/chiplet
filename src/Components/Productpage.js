import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
var link = 'https://api.npoint.io/be666e0b6b2cb1df22c4'
export default function Productpage() {
    var { uid } = useParams()
    var [data, getData] = useState([])
    var [qnt, setQnt] = useState(0)
    var [price, setPrice] = useState(1)
    var [symbol, setSymbol] = useState("$")
    var discFactor = 0
    var totalCost = 0
    var discount = 0
    useEffect(() => {
        axios.get(link).then((res) => { getData(res.data) })
    }, [])

    function getTotal(cost) {
        totalCost = cost * qnt
        return totalCost
    }

    function getDisc() {
        if (qnt < 50) {
            discFactor = 5
        }
        if (qnt >= 50 && qnt < 100) {
            discFactor = 10
        }
        if (qnt >= 100 && qnt < 200) {
            discFactor = 15
        }
        if (qnt >= 200) {
            discFactor = 20
        }

        discount = ((discFactor / 100) * totalCost)

        return discount

    }
    function setCurr(val) {


        if (val === "USD") {
            setSymbol("$")
            setPrice(1)
        }
        if (val === "CAD") {
            setSymbol("C$")
            setPrice(1.3)
        }
        if (val === "INR") {
            setSymbol("₹")
            setPrice(81.7)
        }
        if (val === "EUR") {
            setSymbol("€")
            setPrice(0.9)
        }



    }

    function handleChange(val)
    {
        if(validQnt(val)  ==="validated")
        {
           setQnt(val) 
        }
        
    }

    function validQnt(quant)
    {
      if(quant<0)
      {
        alert("Quantity has to be more than 1")
        return "not validated"
      }
      if(quant%1!==0)
      {
        alert("Quantity cannot be in decimals")
        return "not validated"
      }
      if(quant>1000)
      {
        alert("Quantity cannot be more than 1000")
        return "not validated"
      }
      else{
        return "validated"
      }
    }

    return (
        <div className='product-main-container'>

            {
                data.map((e) => {
                    console.log(typeof (e.uid), typeof (uid))
                    if (parseInt(e.uid) === parseInt(uid)) {

                        return (

                            <div className='product-container'>
                                <div className='product-upper'>
                                    <div className='product-upper-right'>
                                        <div className='product-upper-right-main'>
                                            <h1>{e.name}</h1>
                                            <p>{e.description}</p>
                                            <div className='cost-div'>
                                                <h2 className='price-heading'>{((e.price) * price).toFixed(0)} {symbol} </h2>
                                                <div className='cost-btn-div'>
                                                    <button className={symbol === "$" ? "cost-button active" : "cost-button"} onClick={(e) => { setCurr("USD") }}>USD</button>
                                                    <button className={symbol === "C$" ? "cost-button active" : "cost-button"} onClick={(e) => { setCurr("CAD") }}>CAD</button>
                                                    <button className={symbol === "₹" ? "cost-button active" : "cost-button"} onClick={(e) => { setCurr("INR") }}>INR</button>
                                                    <button className={symbol === "€" ? "cost-button active" : "cost-button"} onClick={(e) => { setCurr("EUR") }}>EUR</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='quantity'>
                                            <h2>Quatity</h2>
                                            <form className='quant-form'>
                                                <label className='label-form'><h4>Enter The Quantity:</h4>
                                                    <input
                                                        className='quant-input'
                                                        type="number"
                                                        name='quantity'
                                                        value={qnt}
                                                        onChange={(e) => { handleChange(e.target.value)}}
                                                    />
                                                </label>
                                            </form>
                                            <div className='pricing'>
                                                <h4>Total Cost: <p>{(getTotal((e.price) * price)).toFixed(0)} {symbol}</p></h4>
                                                <h4>Discount: <p>{(getDisc()).toFixed(0)} {symbol}</p></h4>
                                            </div>
                                            <h2>Final Price: {(totalCost - discount).toFixed(0)} {symbol}</h2>
                                            <button className='prod-btn'>Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className='product-image-main'>
                                        <div className='image-container'>
                                            <img className='prod-img' src={e.imageurl} alt='product'></img>
                                        </div>
                                    </div>
                                </div>
                                <div className='discount-section'>
                                 <h1>Our Wholesale Prices</h1>
                                 <div className='wholesale-div-container'>
                                   <div className='wholesale-div'>
                                    <h2>5% Discount</h2>
                                    <h4>On purchase of less thank 50 pieces</h4>
                                    <h4>Emi Starts at 10%pa</h4>
                                   </div>
                                   <div className='wholesale-div'>
                                    <h2>10% Discount</h2>
                                    <h4>On purchase of more than 100 pieces</h4>
                                    <h4>Emi Starts at 8%pa</h4>
                                   </div>
                                   <div className='wholesale-div'>
                                    <h2>15% Discount</h2>
                                    <h4>On purchase of more than 150 pieces</h4>
                                    <h4>Emi Starts at 6%pa</h4>
                                   </div>
                                   <div className='wholesale-div'>
                                    <h2>20% Discount</h2>
                                    <h4>On purchase of more than 200 pieces</h4>
                                    <h4>Emi Starts at 5%pa</h4>
                                   </div>
                                 </div>
                                </div>
                                <div className='reviews-section'>
                                   <h1>Reviews</h1>
                                </div>
                            </div>
                        )
                    }
                    else {
                        return null
                    }
                })

            }
        </div>
    )
}
