import React, { useState } from 'react'
import axios from 'axios'

function LoginForm(){
    const [username, setUsername] = useState ('')
    const [password, setPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault()

    try {
        const response = await axios.post('URL', {
            username: username,
            password: password
        })

        if (response.data.token){
            localStorage.setItem('token', response.data.token)
            console.log("Login lyckades!!!")
        } else {
            console.log("Login mysslyckades!!!", response.data.message)
        }
        
    } catch (error){
        console.error("Login error!!!", error.response.data)
    }
}
    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Username:</label>
                <input type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <button type="submit">Logga in</button>
        </form>
    )
}

export default LoginForm