import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "/resources/scss/homepage/Login.scss";
import axios from "axios";
import Context from "../Context";
import Icon from "@mdi/react";
import { mdiEmail, mdiLock } from "@mdi/js";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Login(props) {
    const navigate = useNavigate();
    const { getUser } = useContext(Context);

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", values);
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
        navigate("/client");
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
        <section className="login">
            <h1>Login</h1>
            <form action="/login" method="post" onSubmit={handleSubmit}>
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
                <div className="btn">
                    <button>Login</button>
                </div>
                <p>
                    Don't have an account yet?{" "}
                    <Link to="/register">Register</Link>
                </p>
            </form>
        </section>
        <Footer />
        </>
    );
}
