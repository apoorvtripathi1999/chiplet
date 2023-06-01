import React, { useState } from 'react'
import { auth, googleAuth } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, sendEmailVerification, getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'
export default function Signup() {
    var [email, getEmail] = useState("")
    var [password, getPassword] = useState("")
    var [error, setError] = useState("")
 
    const handleGoogle = async () => {
        try {
            await signInWithPopup(auth, googleAuth)
            alert("Signed Up Using Google")
        } catch (err) {
            console.error(err)
            setError(err)
            alert(error)
        }
    }
    const handleClick = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            auth?.currentUser?.emailVerified ? alert("Signed Up") : sendEmailVerification(auth.currentUser).then(() => {
                auth.signOut()
                alert("Verification Email Has Been Sent, please verify your email to access")
            })
        } catch (err) {
            if(err.message === "Firebase: Error (auth/email-already-in-use).")
            {
               alert("This Email is already taken by a user, please use another mail or login") 
            }
            else{
                alert("some error occured")
            }
        }
    }

    const handleEmail = (email) => {
        getEmail(email)
    }
    const handlePassword = (pswd) => {
        getPassword(pswd)
    }

    return (

        <div className='login-main'>
            <div className='login-inner'>
                <input placeholder='username' type='email' onChange={(e) => { handleEmail(e.target.value) }}>
                </input>
                <input placeholder='password' type='password' onChange={(e) => { handlePassword(e.target.value) }}>
                </input>
                <button onClick={handleClick}>Sign Up</button>
                <button onClick={handleGoogle}>Sign Up With Google</button>
                <p>Already Registered? <Link to='/login'>Sign In</Link></p>
            </div>
        </div>
    )
}
