import React from 'react'
import '../CSS/home.css'
import logo from '../Images/home/chiplet_logo.png'

export default function navbarMain() {

    return (
        <>
            <nav className="navbar navbar-main bg-light">
                <div className="container-fluid nav-container">
                    <ul className='nav-links'>
                        <li className='nav-list-item'>Shop</li>
                        <li className='nav-list-item'>Colection</li>
                        <li className='nav-list-item'>Premium</li>
                        <li className='nav-list-item'>About</li>
                    </ul>
                    <a className="navbar-brand">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top logo"/>
                    </a>
                    <ul className='nav-links'>
                       <li className='nav-list-item'>Login</li>
                       <li className='nav-list-item'>Cart</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
