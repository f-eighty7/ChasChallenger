import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';

function SignUpForm() {
    // State for managing input fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Simple front-end validation for example purposes
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
        <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div>
            <label>Email:</label>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>Password:</label>
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
        </div>
        <div>
            <label>Confirm Password:</label>
            <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required
            />
        </div>
        <button type="submit">Sign Up</button>
    </form>
    );
}

export default SignUpForm;
