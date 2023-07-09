import { collection,getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../config/firebase'


export default function Kart() {
 var [items,getItems] =  useState([])

 useEffect(()=>{
  getData()
 },[])

  var getData = async () => {
    var cartsCollection = collection(db,'carts')
    const querySnapshot = await getDocs(cartsCollection)
    var data = querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
    getItems(data)
    console.log(data)
  }
    
  return (
    <div>Kart</div>
  )
}
