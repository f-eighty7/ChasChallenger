import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('URL', {
                username: username,
                password: password
            });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                console.log("Login lyckades!!!");
            } else {
                console.log("Login mysslyckades!!!", response.data.message);
            }
        } catch (error) {
            console.error("Login error!!!", error.response.data);
        }
    };

    return (
        <div className="loginForm-container">
            <form className="loginForm" onSubmit={handleLogin}>
                <label className="login">Login</label>
                <div>
                    <label className="label">E-post:</label>
                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="label">Lösenord:</label>
                    <input
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="button" type="submit">Logga in</button>
                <label className="signUp">Vill du bli en av oss? 
                    <button onClick={() => { alert('Navigate to sign up page'); }}>Skapa konto</button></label>
            </form>
        </div>
    );
}

export default LoginForm;
