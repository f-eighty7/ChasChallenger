import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const handleSubmit = async (event) => {
        event.preventDefault();

       
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            const response = await axios.post('https://your-api-url.com/signup', {
                email,
                password
            });
            console.log('User signed up:', response.data);
            // Implement your logic upon successful signup, like redirecting to another page
        } catch (error) {
            console.error('There was an error during signup:', error);
            alert('Error signing up, please try again later.');
        }
    };

    return (
        <div className="signup-form-container">
            
        <form onSubmit={handleSubmit} className="signup-form">
        <div className="skapaKonto">Skapa konto</div> 
        <div>
            <label>E-post:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>Lösenord:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>Bekräfta lösenord:</label>
            <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required
            />
        </div>
        <button type="submit">Sign Up</button>
    </form>
    </div>
    );
}

export default SignUpForm;
