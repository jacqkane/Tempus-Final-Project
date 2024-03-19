import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '/resources/scss/App.scss';
import { useContext, useReducer, useState } from 'react';
import Context from './Context.js';
import reducer from './reducer.js';


import Header from './common/Header.jsx';
import Footer from './common/Footer.jsx';
import Home from './home/Home.jsx';
import Attendance from './attendance/Attendance.jsx';
import Assignment from './assignment/Assignment.jsx';
import Report from './reports/Report.jsx';
import Setup from './setup/Setup.jsx';
import Projects from './setup/Projects.jsx';
import Rfqs from './setup/Rfqs.jsx';
import Users from './setup/Users.jsx';

export default function App() {

    const contextObject = {
        user: null,
        // property1: '',
        // property2: null,
        // property3: [],
        // property4: 0,
    };
    const [state, dispatch] = useReducer(reducer, contextObject);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Header />
                <Routes>
                    {/* should be accessible for all people */}
                    {/* <Route path="/home" element={<Home />} /> */}

                    {/* should be accessible for loged-in users */}
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/assignment" element={<Assignment />} />
                    <Route path="/report" element={<Report />} />

                    {/* should be accessible for loged-in users & admin role */}
                    <Route path="/setup" element={<Setup />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/rfqs" element={<Rfqs />} />

                    {/* should be accessible for loged-in users & project-leader role */}
                    {/* <Route path="" element={< />} /> */}

                </Routes>
                <Footer />
            </BrowserRouter>
        </Context.Provider >


    );
}