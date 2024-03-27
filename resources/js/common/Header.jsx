import React, { useState } from 'react';
import '/resources/scss/common/Header.scss'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '/public/logo/logo.png';
import ScrollToTop from '../homepage/ScrollToTop';

export default function Header() {
    const [status, setStatus] = useState('close');

const toggleMenu = () => {
    setStatus(status === 'open' ? 'close' : 'open')
}

    return (
        <>
        
        <header className='header'>
            <div className='logo'>
                <img src={Logo} alt="Logo of tempus" />
            </div>
            <nav className='burger_menu'>
                <div
                    className='burger_menu--container'
                    role='button'
                    onClick={toggleMenu}
                >
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>
                {status === 'open' && (
                    <div className='burger-menu-view'>
                    <ul className='burger-menu-links'>
                        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>

                            <hr />
                        <li><a href='#features' onClick={toggleMenu}>Features</a></li>

                        <hr />
                        <li><a href='#price' onClick={toggleMenu}>Price</a></li>

                        <hr />
                        <li><a href='#reviews' onClick={toggleMenu}>Reviews</a></li>

                        <hr />
                        <li><a href='#contact' onClick={toggleMenu}>Contact us</a></li>

                        <hr />
                        <li><Link to='/register' onClick={toggleMenu}>Registration</Link></li>

                        <hr />
                        <li><Link to='/login' onClick={toggleMenu}>Login</Link></li>

                    </ul>
                    </div>
                    
                )}
            </nav>
            <nav className='full_screen'>
                    <ul className='full_screen-links'>
                        <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
                        <li><a href='#features' onClick={toggleMenu}>Features</a></li>
                        <li><a href='#price' onClick={toggleMenu}>Price</a></li>
                        <li><a href='#reviews' onClick={toggleMenu}>Reviews</a></li>
                        <li><a href='#contact' onClick={toggleMenu}>Contact us</a></li>
                        <li><Link to='/register' onClick={toggleMenu}>Registration</Link></li>
                        <li><Link to='/login' onClick={toggleMenu}>Login</Link></li>
                    </ul>
            </nav>
    </header>
    </>
    )
}