import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "/resources/scss/clienthome/RealHomepage.scss";
import ClientHeader from "../common/ClientHeader";
import ClientFooter from "../common/ClientFooter";
import Context from "../Context";
import Logout from "../homepage/Logout";

function RealHomepage() {
    const {
        state: { user, role, currentDate, currentDateFormated },
        dispatch,
        getUser,
    } = useContext(Context);
    console.log(role);
    return (
        <>
            <ClientHeader />
            <section className="main-homepage">
                <div className="buttons">
                    <div className="add-people">
                        {role === "admin" && (
                            <Link to="/add/user">Add user</Link>
                        )}
                    </div>
                </div>
                <h2>Welcome to Your Dashboard</h2>
                <p>
                    You can choose where you'd like to go from the options below
                </p>
                <div className="main-homepage-container-links">
                    <div className="main-homepage-link">
                        <Link to="/attendance-actions">Attendance</Link>
                    </div>
                    <div className="main-homepage-link">
                        <Link to="/attendance-list">Attendance Details</Link>
                    </div>
                    <div className="main-homepage-link">
                        <Link to="/assignment">Assignment</Link>
                    </div>

                    {role === "admin" && (
                        <div className="main-homepage-link">
                            <Link to="/report">Reports</Link>
                        </div>
                    )}

                    {role === "admin" && (
                        <div className="main-homepage-link">
                            <Link to="/projects">Projects</Link>
                        </div>
                    )}

                    {role === "admin" && (
                        <div className="main-homepage-link">
                            <Link to="/rfqs">RFQS</Link>
                        </div>
                    )}
                </div>
            </section>
            <ClientFooter />
        </>
    );
}

export default RealHomepage;
