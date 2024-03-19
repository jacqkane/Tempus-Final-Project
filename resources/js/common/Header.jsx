import axios from 'axios';
import '/resources/scss/common/Header.scss'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Context';

export default function Header() {

    const navigate = useNavigate();
    const { getUser } = useContext(Context)

    const logout = async () => {
        try {
            // make the AJAX request
            const response = await axios.post('/logout');
            // get the (already JSON-parsed) response data
            const response_data = response.data;
        } catch (error) {
            // if the response code is not 2xx (success)
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
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
        <div className='header'>
            Here comes Header
            <button onClick={logout}>Logout</button>
        </div>
    )
}