import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/user.css'


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
                console.log(auth?.currentUser?.emailVerified)
            }
            else{
              navigate('/')
            }
          })
    },[auth,navigate])

    

  return (
    <div className='user-main'>
        <div className='user-divs'>
            <img src={imgUser} alt='user' className='user-img'></img>
            <input type='file'/>
        </div>
        <div className='user-divs'>
            <h2>USER DETAILS</h2>
            <p>{name}</p>
            <p>{email}</p>
            <div>
            <p>Reviews</p>
            </div>
        </div>
    </div>
  )
}
