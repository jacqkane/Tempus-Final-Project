import { useContext, useEffect, useState } from "react";
import Context from "../Context";
import axios from "axios";
import "/resources/scss/clienthome/AddUser.scss";
import { Navigate, useNavigate } from "react-router-dom";
import ClientHeader from "../common/ClientHeader";

function AddUser() {
    const { addUser} = useContext(Context)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        role: "",
    });

    const [roles, setRoles] = useState([]);

    const fetchRoles = async () => {
        try {
            const response = await axios.get("/api/roles");
            console.log(response)
            setRoles(response.data);
        } catch (error) {
            console.error("Failed to get role", error);
        }
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            const repsonse = await axios.post('api/add/user', userData);
        } catch (error) {
           console.error('Error creating user', error); 
        }
        setUserData({ name: "", email: "", role: "" });
        navigate('/homepage')
    };

    return (
        <>
        <ClientHeader />
        <section className="new-user">
            <h2>Add a new person!</h2>
            <form onSubmit={handleSubmit} className="add-user-form">
                <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="Full name of the user"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Email of the user"
                    required
                />
                <select
                    name="role"
                    value={userData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a role</option>
                    {roles.map((role) => (
                        <option key={role.id} value={role.name}>
                            {role.name}
                        </option>
                    ))}
                </select>
                <button type="submit">Add a new user</button>
            </form>
        </section>
        </>
    );
}

export default AddUser;
