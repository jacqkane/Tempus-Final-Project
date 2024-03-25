import { Link } from 'react-router-dom'
import '/resources/scss/common/Footer.scss'

function ClientFooter() {
    return ( 
        <footer className="footer">
            <ul className="footer-links">
                <li><Link to='/attendance'>Attendance</Link></li>
                <li><Link to='/assignment'>Assignment</Link></li>
                <li><Link to='/report'>Report</Link></li>
                <li><Link to='/setup'>Set up</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/rfqs'>RFQS</Link></li>
            </ul>
            <div className='footer-text'>
                    <p>Address of company</p>
                    <p>© 2024 Tempus.  All rights reserved.</p>
                </div>
        </footer>
       );
}

export default ClientFooter;
