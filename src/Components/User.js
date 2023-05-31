import { getAuth,onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function User() {
    var [name,setName] = useState("")
    var [email,setEmail] = useState("")
    var [imgUser,setImgUser] = useState("")
    const auth = getAuth()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log(auth?.currentUser?.displayName)
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                setName(auth?.currentUser?.displayName)
                setEmail(auth?.currentUser?.email)
                setImgUser(auth?.currentUser?.photoURL)
                console.log(auth?.currentUser?.displayName,name,email)
            }
            else{
              navigate('/')
            }
          })
    },[auth])

  return (
    <div>
        <div className='user-image'>
            <img src={imgUser} alt='user' className='user-img'></img>
        </div>
        <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>Reviews</p>
        </div>
    </div>
  )
}
