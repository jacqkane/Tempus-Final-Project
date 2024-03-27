import axios from "axios";
import { useState } from "react";
import "/resources/scss/clienthome/ResetPassword.scss";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [passwordConfirmed, setPasswordConfirmed] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('/api/reset/password', {
                email,
                old_password: oldPassword,
                password,
                password_confirmation: passwordConfirmed, 
            });
            alert('Your password has been reset.');
            navigate('/homepage');
        } catch (error) {
            console.error('Error resetting password', error);
            alert('There was an error resetting your password.');
        }
    }

    return ( 
        <form onSubmit={handleSubmit} className="reset-password-form">
            <h2>Reset Password</h2>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
            />
            <input
            type="password" 
            name="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter your old password from Email"
            required
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password"
                required
            />
            <input
                type="password"
                name="passwordConfirmed"
                value={passwordConfirmed}
                onChange={(e) => setPasswordConfirmed(e.target.value)}
                placeholder="Confirm new password"
                required
            />
            <button type="submit">Reset Password</button>
        </form>
     );
}

export default ResetPassword;
