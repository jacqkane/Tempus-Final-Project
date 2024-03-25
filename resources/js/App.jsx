import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "/resources/scss/App.scss";
import { useContext, useEffect, useReducer, useState } from "react";
import Context from "./Context.js";
import reducer from "./reducer.js";
import Header from "./common/Header.jsx";
import Footer from "./common/Footer.jsx";
import Attendance from "./attendance/Attendance.jsx";
import Assignment from "./assignment/Assignment.jsx";
import Report from "./reports/Report.jsx";
import Setup from "./setup/Setup.jsx";
import Projects from "./setup/Projects.jsx";
import Rfqs from "./setup/Rfqs.jsx";
import Users from "./setup/Users.jsx";
import Homepage from "./homepage/Homepage.jsx";
import Register from "./homepage/Register.jsx";
import Login from "./homepage/Login.jsx";
import ClientHomepage from "./clienthome/ClientHomepage.jsx";
import Contact from "./homepage/Contact.jsx";
import Features from "./homepage/Features.jsx";

export default function App() {
    const contextObject = {
        user: null,
        role: null,
        currentDate: null,
    };

    // states definition below
    const [state, dispatch] = useReducer(reducer, contextObject);

    //setting formatted current date yyyy-mm-dd
    const setCurrentDate = () => {
        let currentDate = new Date();
        currentDate = currentDate.toLocaleDateString("en-CA");
        dispatch({
            type: "currentDate/set",
            payload: currentDate,
        });
    };

    //getting current user and storing to state
    const getUser = async () => {
        const response = await fetch("/api/user");

        if (response.status == 200) {
            const currentUser = await response.json();
            dispatch({
                type: "user/set",
                payload: currentUser,
            });
            dispatch({
                type: "role/set",
                payload: currentUser.role,
            });
        }
    };

    //refresh on reload
    useEffect(() => {
        getUser();
        setCurrentDate();
    }, []);

    return (
        <Context.Provider value={{ state, dispatch, getUser }}>
            <BrowserRouter>
                {/* her inset Navigation for logged-in user */}
                <Routes>
                    {/* should be accessible for all people */}

                    <Route path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />

                    {/* {
                        contextObject.user ? 

                            (
                                contextObject.role != "admin" ?<> */}
                    {/* should be accessible for loged-in users */}
                    <Route path="/client" element={<ClientHomepage />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/assignment" element={<Assignment />} />
                    <Route path="/report" element={<Report />} />
                    {/* </> : */}

                    {/* <> */}
                    {/* should be accessible for loged-in users & admin role */}
                    <Route path="/setup" element={<Setup />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/rfqs" element={<Rfqs />} />
                    {/* </> */}

                    {/* ) : '' */}
                    {/* } */}

                    {/* should be accessible for loged-in users & project-leader role */}
                    {/* <Route path="" element={< />} /> */}
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    );
}
