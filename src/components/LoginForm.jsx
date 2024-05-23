import React, { useState } from "react";
import axios from "axios";
import style from "../components/LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

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
            
            const response = await axios.post('https://chasfantasy.azurewebsites.net/login?useCookies=true', {
                email,
                password

        })
             
		
		console.log("Response Headers:", response.headers);
        /* const hejsan = await axios.get('http://localhost:5001/user/character')
function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://chasfantasy.azurewebsites.net/login?useCookies=true",
        { email, password }
      );

      /* const hejsan = await axios.get('http://localhost:5001/user/character')
            console.log("detta är hejsan", hejsan)
            console.log(response); */
            


           
           if (response.status === 200) {
                console.log("Login succeeded!");}
                alert('WOW!!! Du lyckades logga in. Det här kommer att bli en bra dag!')
                navigate('/characters');
              
                
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
    <div className={style.container}>
      <form className={style.form} onSubmit={handleLogin}>
        <h2 className={style.title}>Log in</h2>
        <div className={style["inputs"]}>
          <label className={style["label-name"]} htmlFor="email">
            E-mail*
          </label>
          <input
            id="email"
            className={style["input-form"]}
            type="email"
            placeholder="fantasy@chass.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style["inputs"]}>
          <label className={style["label-name"]} htmlFor="password">
            Password*
          </label>
          <input
            id="password"
            className={style["input-form"]}
            placeholder=""
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style["login-checkbox-wrapper"]}>
          <button
            title="Log in"
            className={style["login-button"]}
            type="submit"
          >
            Log in
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <input
            className={style["input-checkbox"]}
            title="Remember me"
            id="remember"
            type="checkbox"
            value=""
          />
          <label className={style["remember-text"]} htmlFor="remember">
            Remember me
          </label>
        </div>
        <div className={style["forgot-password"]}>
          <Link title="Forgot password" to={"/error"}>
            Did you forget your password?
          </Link>
        </div>
      </form>
      <div className={style.or}>OR</div>
      <div className={style["signup-back-wrapper"]}>
        <Link to="/signup">
          <button title="Sign up" className={style["signup-button"]}>
            Sign Up
          </button>
        </Link>
      </div>
      <div className={style.goback}>
        <Link title="Go Back" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
