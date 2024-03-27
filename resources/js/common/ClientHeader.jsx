import React, { useState } from "react";
import "/resources/scss/common/Header.scss";
import { Link } from "react-router-dom";
import Logo from "/public/logo/logo.png";
import { LogOut } from "react-feather";
import Logout from "../homepage/Logout";

function ClientHeader() {
    const [status, setStatus] = useState("close");

    const toggleMenu = () => {
        setStatus(status === 'open' ? 'close' : 'open')
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Logo of tempus" />
            </div>
            <nav className="burger_menu">
                <div
                    className="burger_menu--container"
                    role="button"
                    onClick={toggleMenu}
                >
                    <i className={status}></i>
                    <i className={status}></i>
                    <i className={status}></i>
                </div>
                {status === "open" && (
                    <div className="burger-menu-view">
                        <ul className="burger-menu-links">
                            <li>
                                <Link to="/homepage">Homepage</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/attendance-actions">Attendance</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/attendance-list">Attendance Details</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/assignment">Assignment</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/report">Report</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/setup">Set up</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <hr />
                            <li>
                                <Link to="/rfqs">RFQS</Link>
                            </li>
                            <hr />
                        <Logout />
                        </ul>
                    </div>
                )}
            </nav>

            <nav className='full_screen'>
                    <ul className='full_screen-links'>
                    <li>
                        <Link to="/homepage">Homepage</Link>
                            </li>
                            <li>
                                <Link to="/attendance-actions">Attendance</Link>
                            </li>
                            <li>
                                <Link to="/attendance-list">Attendance Details</Link>
                            </li>
                            <li>
                                <Link to="/assignment">Assignment</Link>
                            </li>
                            <li>
                                <Link to="/report">Report</Link>
                            </li>
                            <li>
                                <Link to="/setup">Set up</Link>
                            </li>
                            <li>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li>
                                <Link to="/rfqs">RFQS</Link>
                            </li>
                    </ul>
            </nav>
        </header>
    );
}

export default ClientHeader;
