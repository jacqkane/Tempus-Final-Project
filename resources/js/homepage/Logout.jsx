import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Context from "/resources/js/Context.js";

function Logout() {
    const { getUser, setUser } = useContext(Context);
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const response = await axios.post('/logout');
            const response_data = response.data;
        } catch (error) {
            switch (error.response.status) {
                case 422:
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }
        getUser();
        navigate('/')
    }
    return (
        <button onClick={logout}>Logout</button>
    );
}

export default Logout;
