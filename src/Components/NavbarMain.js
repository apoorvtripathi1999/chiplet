import React from 'react'
import '../CSS/home.css'
import logo from '../Images/home/chiplet_logo.png'
import { Link } from 'react-router-dom'

export default function navbarMain() {

    return (
        <>
            <nav className="navbar navbar-main bg-light">
                <div className="container-fluid nav-container">
                    <ul className='nav-links'>
                        <Link to='/shop' className='nav-list-item'>Shop</Link>
                        <Link to='/collection' className='nav-list-item'>Colection</Link>
                        <li className='nav-list-item'>Premium</li>
                        <li className='nav-list-item'>About</li>
                    </ul>
                    <Link to='/' className="navbar-brand">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top logo"/>
                    </Link>
                    <ul className='nav-links'>
                       <li className='nav-list-item'>Login</li>
                       <li className='nav-list-item'>Cart</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
