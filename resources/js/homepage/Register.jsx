import React, { useState, useEffect, useContext } from "react";
import Context from "../Context";
import { Link, useNavigate } from "react-router-dom";
import "/resources/scss/homepage/Registration.scss";
import axios from "axios";
import Icon from "@mdi/react";
import { mdiDomain, mdiRename, mdiEmail, mdiLock, mdiLockCheck } from "@mdi/js";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Register(props) {
    const navigate = useNavigate();
    const { getUser } = useContext(Context);

    const [values, setValues] = useState({
        company_name: "",
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/register", values);
            const response_data = response.data;
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
        getUser();
        // navigate("");
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <>
        <Header />
        <section className="registration">
            <h1>Registration</h1>
            <form action="/register" method="post" onSubmit={handleSubmit}>
                <div className="form-input">
                    <span>
                        <Icon
                            path={mdiDomain}
                            title="User Profile"
                            size={1.4}
                            color="#393e42"
                        />
                    </span>
                    <input
                        type="text"
                        name="company_name"
                        value={values.company_name}
                        onChange={handleChange}
                        placeholder="Company name"
                    />
                </div>
                <div className="form-input">
                    <span>
                        <Icon
                            path={mdiRename}
                            title="User Profile"
                            size={1.4}
                            color="#393e42"
                        />
                    </span>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Full name"
                    />
                </div>
                <div className="form-input">
                    <span>
                        <Icon
                            path={mdiEmail}
                            title="User Profile"
                            size={1.4}
                            color="#393e42"
                        />
                    </span>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div className="form-input">
                    <span>
                        <Icon
                            path={mdiLock}
                            title="User Profile"
                            size={1.4}
                            color="#393e42"
                        />
                    </span>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <div className="form-input">
                    <span>
                        <Icon
                            path={mdiLockCheck}
                            title="User Profile"
                            size={1.4}
                            color="#393e42"
                        />
                    </span>
                    <input
                        type="password"
                        name="password_confirmation"
                        value={values.password_confirmation}
                        onChange={handleChange}
                        placeholder="Password Confirmation"
                    />
                </div>
                <div className="btn">
                <button>Register</button>
                </div>
                <p>Do you have already account? <Link to='/login'>Login</Link></p>
            </form>
            </section>
            <Footer />
        </>
    );
}
