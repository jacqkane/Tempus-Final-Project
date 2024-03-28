import React, { useContext, useState } from "react";
import "/resources/scss/common/Header.scss";
import { Link } from "react-router-dom";
import Logo from "/public/logo/logo.png";
import { LogOut } from "react-feather";
import Logout from "../homepage/Logout";
import Context from "../Context";

function ClientHeader() {
    const [status, setStatus] = useState("close");
    const { state: { user, role, currentDate, currentDateFormated }, dispatch, getUser } = useContext(Context);

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

                            {(role === 'admin') &&
                                <>
                                    <hr />
                                    <li>
                                        <Link to="/report">Report</Link>
                                    </li>
                                </>
                            }
                            <hr />
                            {(role === 'admin') &&
                                <>
                                    <hr />

                                    <li>
                                        <Link to="/setup">Set up</Link>
                                    </li>
                                </>
                            }

                            {(role === 'admin') &&
                                <>
                                    <hr />
                                    <li>
                                        <Link to="/projects">Projects</Link>
                                    </li>
                                </>
                            }

                            {(role === 'admin') &&
                                <>
                                    <hr />
                                    <li>
                                        <Link to="/rfqs">RFQS</Link>
                                    </li>
                                    <hr />
                                </>
                            }
                            
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
                    {(role === 'admin') &&
                        <li>
                            <Link to="/report">Report</Link>
                        </li>
                    }

                    {(role === 'admin') &&
                        <li>
                            <Link to="/setup">Set up</Link>
                        </li>
                    }

                    {(role === 'admin') &&
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    }

                    {(role === 'admin') &&
                        <li>
                            <Link to="/rfqs">RFQS</Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default ClientHeader;
