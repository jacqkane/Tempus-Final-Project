import React, { useState } from 'react';
import '/resources/scss/common/Header.scss'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '/public/logo/logo.png';

export default function Header() {
    const [status, setStatus] = useState('close');

const toggleMenu = () => {
    setStatus(status === 'open' ? 'close' : 'open')
}

    return (
        <header className='header'>
            <div className='logo'>
                <img src={Logo} alt="Logo of tempus" />
            </div>
            <nav>
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
                        <li><Link to='/'>Home</Link></li>
                        <li><a href='#features'>Features</a></li>
                        <li><a href='#price'>Price</a></li>
                        <li><a href='#reviews'>Reviews</a></li>
                        <li><a href='#contact'>Contact us</a></li>
                        <li><Link to='/register'>Registration</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                    </div>
                )}
            </nav>
        {/* <button onClick={logout}>Logout</button> */}
    </header>
    
    )
}