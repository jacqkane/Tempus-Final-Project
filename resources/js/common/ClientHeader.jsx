import React, { useState } from "react";
import "/resources/scss/common/Header.scss";
import { Link } from "react-router-dom";
import Logo from "/public/logo/logo.png";

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
            <nav>
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
                                <Link to="/attendance">Attendance</Link>
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
                    </div>
                )}
            </nav>
            {/* <button onClick={logout}>Logout</button> */}
        </header>
    );
}

export default ClientHeader;
