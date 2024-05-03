import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage(''); // Clear previous errors

        try {
            const response = await axios.post('http://localhost:5106/login', {
                email,
                password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log("Login successful!");
                // Redirect or perform further actions
            } else {
                console.log("Login failed:", response.data.message);
                setErrorMessage(response.data.message || 'Failed to login.');
            }
        } catch (error) {
            console.error("Login error:", error.response ? error.response.data : 'Server error');
            setErrorMessage(error.response ? error.response.data : 'Server error');
        }
    };

    return (
        <div className="loginForm-container">
            <form className="loginForm" onSubmit={handleLogin}>
                <h1 className="login">Login</h1>
                <div>
                    <label htmlFor="email" className="label">E-post:</label>
                    <input
                        id="email"
                        className="input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="label">Lösenord:</label>
                    <input
                        id="password"
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">Logga in</button>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <p className="signUp">Vill du bli en av oss? 
                  <Link to="/signup" className="buttonLink">Skapa konto</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;
