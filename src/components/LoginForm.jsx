import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
/* import { Link } from "react-router-dom"; */
import ButtonOne from "./ButtonOne";

axios.defaults.withCredentials = true

function LoginForm()
 {
    const navigate = useNavigate();
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
                alert('WOW!!! Du lyckades logga in. Det här kommer att bli en bra dag!')
                navigate('/characters');
              
                
                if (response.headers['set-cookie']) {
                    /* console.log("Cookies from Set-Cookie header:", response.headers['set-cookie']); */
                

                
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
			<div className="bg-gray-900 p-5 rounded-xl border">
				<form
					className="max-w-sm mx-auto "
					onSubmit={handleLogin}>
					<h1 className="text-center text-xl">Log in</h1>
					<div className="mb-5">
						<label
							htmlFor="email"
							className="block mb-2 text-sm font-medium text-gray-200 dark:text-white">
							E-mail*
						</label>
						<input
							id="email"
							className="input-form"
							type="email"
							placeholder="fantasy@chass.se"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-5">
						<label
							htmlFor="password"
							className="block mb-2 text-sm font-medium text-white dark:text-white">
							Password*
						</label>
						<input
							id="password"
							className="input-form"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex items-start mb-5">
						<div className="flex items-center h-5">
							<ButtonOne
								buttonText={"Log in"}
								buttonType="submit"
							/>
							{errorMessage && <p className="error">{errorMessage}</p>}
							<input
								className="input-checkbox"
								id="remember"
								type="checkbox"
								value=""
							/>
						</div>
						<label
							for="remember"
							className="ms-2 text-xs font-medium text-white dark:text-gray-300 ">
							Remember me
						</label>
				</div>
				<div
				className="text-center">
					<Link
						to="/signup">
						<ButtonOne
							paddingClass={"px-10"}
							marginClass={"mt-3"}
							buttonText="Sign up"
						/>
					</Link>
					<Link
						to={"/error"}>
						<button className="underline text-xs">* Forgot your Password?</button>
					</Link>

				</div>
				</form>
			</div>
		);
}

export default LoginForm;


