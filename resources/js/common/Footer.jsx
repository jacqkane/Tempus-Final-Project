import { Link } from 'react-router-dom'
import '/resources/scss/common/Footer.scss'

export default function Footer() {

    return (
        <footer className='footer'>
             <ul className='footer-links'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/features'>Features</Link></li>
                        <li><Link to='/price'>Price</Link></li>
                        <li><Link to='/reviews'>Reviews</Link></li>
                        <li><Link to='/contact'>Contact us</Link></li>
                        <li><Link to='/register'>Registration</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>

                <div className='footer-text'>
                    <p>Address of company</p>
                    <p>© 2024 Tempus.  All rights reserved.</p>
                </div>
        </footer>
    )
}