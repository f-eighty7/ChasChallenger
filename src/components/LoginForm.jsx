import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import ButtonOne from "./ButtonOne";

axios.defaults.withCredentials = true

function LoginForm()
 {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    
    const handleLogin = async (event) => {
        event.preventDefault();
        setErrorMessage(''); 

        try {
            
            const response = await axios.post('http://localhost:5001/login?useCookies=true', {
                email,
                password

        })
                
        const hejsan = await axios.get('http://localhost:5001/user/character')
            console.log("detta är hejsan", hejsan)
            console.log(response);

           
           if (response.status === 200) {
                console.log("Login succeeded!");}
              
                
                if (response.headers['set-cookie']) {
                    console.log("Cookies from Set-Cookie header:", response.headers['set-cookie']);
                

                
            } else {
                console.log("Login failed:", response.data.message);
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error.response ? error.response.data : 'Server error');
            setErrorMessage(error.response ? error.response.data : 'Server error');
        }

        
    };

    return (

        // border-2 border-indigo-600 BORDER IS MISSING
        <div className="loginForm-container bg-zinc-800 p-5 rounded-xl ">
            <form className="loginForm max-w-sm mx-auto" onSubmit={handleLogin}>
                <h1 className="login">Log in</h1>
                <div
                    className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">E-mail*</label>
                        <input
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="email"
                            placeholder="fantasy@chass.se"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                </div>
                <div
                    className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">Password*</label>
                        <input
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                </div>

                <ButtonOne
                buttonText={'Log in'}
                buttonType='submit' />
                {errorMessage && <p className="error">{errorMessage}</p>}

                <div 
                    className="flex items-start mb-5">
                    <div 
                        className="flex items-center h-5">
                        <input 
                            id="remember" 
                            type="checkbox" 
                            value="" 
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                             />
                    </div>
                    <label for="remember" class="ms-2 text-sm font-medium text-gray-200 dark:text-gray-300">Remember me</label>
                </div>
                <p className="signUp">Did you forget your password?
                </p>
                <Link to="/signup" className="buttonLink"> 
                <ButtonOne 
                    buttonText='Sign up'/>
                </Link>
            </form>
        </div>
    );
}

export default LoginForm;


