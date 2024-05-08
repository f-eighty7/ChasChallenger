import React, { useState, useContext } from "react";
import axios from "axios";
import "./LoginForm.css";
import { Link } from "react-router-dom";


function LoginForm() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage(''); 

        try {
            const sessionToken = localStorage.getItem('token');

            const response = await axios.post('http://localhost:5001/login', {
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${sessionToken}`
                }
        
        
         } );


            console.log(response)
            if (response.data.accessToken) { 
               localStorage.setItem('token', response.data.accessToken);
              
                console.log("Inloggningen lyckades! Här är kommer inloggningstoken !!!" ,response.data.accessToken)
                
                /* console.log("Här är local Storage!!!!", localStorage.getItem("token")) */
               
            } else {
                console.log("Login failed:", response.data.message);
               
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

