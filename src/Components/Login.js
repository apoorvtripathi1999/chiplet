import React, { useState } from 'react'
import '../CSS/collection.css'
import { auth, googleAuth } from '../config/firebase'
import { createUserWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth'
export default function Login() {
    var [email, getEmail] = useState("")
    var [password, getPassword] = useState("")
    var [error, setError] = useState("")

    const handleEmail = (email) => {
        getEmail(email)
    }
    const handlePassword = (pswd) => {
        getPassword(pswd)
    }
    const handleClick = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            alert("Logged In user")
        } catch (err) {
            console.error(err)
            setError(err)
            alert(error)
        }
    }
    const handleOut = async () => {
        try {
            await signOut(auth)
            alert("Logged Out")
        } catch (err) {
            console.error(err)
        }
    }
    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth)
            alert("Logged In Using Google")
        } catch (err) {
            console.error(err)
            setError(err)
            alert(error)
        }
    }
    return (
        <div className='login-main'>
            <div className='login-inner'>
                <input placeholder='username' type='email' onChange={(e) => { handleEmail(e.target.value) }}>
                </input>
                <input placeholder='password' type='password' onChange={(e) => { handlePassword(e.target.value) }}>
                </input>
                <div>
                    <button onClick={handleClick}>Login</button>
                    <button onClick={handleOut}>Logout</button>
                </div>
                <button onClick={handleGoogle}>Sign In With Google</button>
            </div>
        </div>
    )
}
