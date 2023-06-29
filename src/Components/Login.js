import React, { useState } from 'react'
import '../CSS/collection.css'
import { auth, googleAuth } from '../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {
    var [email, getEmail] = useState("")
    var [password, getPassword] = useState("")
    var [error, setError] = useState("")
    let navigate = useNavigate()

    const handleEmail = (email) => {
        getEmail(email)
    }
    const handlePassword = (pswd) => {
        getPassword(pswd)
    }
    const handleClick = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            auth?.currentUser?.emailVerified? 
            navigate('/user/:UID'):  
                auth.signOut()
                alert("Please verify your email to proceed")
                navigate('/login')
        } catch (err) {
            console.error(err)
            setError(err)
            alert(error)
        }
    }

    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth)
            alert("Logged In Using Google")
            navigate('/user/:UID')
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
                <p>Forgot Password?</p>
                <div>
                    <button onClick={handleClick}>Login</button>
                </div>
                <button onClick={handleGoogle}>Sign In With Google</button>
                <p>New to Chiplet? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    )
}
