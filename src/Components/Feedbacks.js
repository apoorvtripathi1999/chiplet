import React, { useEffect, useState } from 'react'
import '../CSS/home.css'
import visa from '../Images/home/visa.png'
import master from '../Images/home/mastercard.png'
import apple from '../Images/home/apple.png'
import payPal from '../Images/home/paypal.png'
export default function Feedbacks() {
    var [feed,setFeed] = useState(1)
    useEffect(()=>{
    },[feed])
    function handleClick(num)
    {
       setFeed(num)
    }
  return (
    <div className='feedback-main'>
    <div className='feedback-upper'>
     <h3 className='feedback-heading'>Dont just take our word for it</h3>
     <div className='feedback-brands'>
        <div className={feed === 1? "brand-element-act":"brand-element"} onClick={ ()=>handleClick(1)}> <h3>Business Insider</h3></div>
        <div className={feed === 2? "brand-element-act":"brand-element"} onClick={ ()=>handleClick(2)}> <h3>Wired</h3></div>
        <div className={feed === 3? "brand-element-act":"brand-element"} onClick={ ()=>handleClick(3)}> <h3>MIT Technology Review</h3></div>
        <div className={feed === 4? "brand-element-act":"brand-element"} onClick={ ()=>handleClick(4)}> <h3>E&T Magazine</h3></div>
     </div>
     <div className='feedback-feed'>
        <div className={feed === 1? "feedback-elenent":"feedback-element-hidden"}> <h5>“Chiplet can take a backbreaker of a board and make it smaller than a deck of cards.”</h5></div>
        <div className={feed === 2? "feedback-elenent":"feedback-element-hidden"}> <h5>“Seriously!! best quality devices”</h5></div>
        <div className={feed === 3? "feedback-elenent":"feedback-element-hidden"}> <h5>“Chiplet is on a mission to improve the way you work with electronics, by making it functional yet elegant.”</h5></div>
        <div className={feed === 4? "feedback-elenent":"feedback-element-hidden"}> <h5>“Honestly, these devices are near perfect.”</h5></div>
     </div>
    </div>
    <div className='feedback-lower'>
        <h4 className='bottom-text'>Safe, easy payment options</h4>
        <div className='payment-options'>
            <img className='payment-img' src={visa} alt='payment-master'></img>
            <img className='payment-img' src={master} alt='payment-master'></img>
            <img className='payment-img' src={payPal} alt='payment-master'></img>
            <img className='payment-img' src={apple} alt='payment-master'></img>
        </div>
    </div>
    </div>
  )
}
