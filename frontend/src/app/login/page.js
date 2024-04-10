'use client'

import { useState } from 'react';
import "./page.css";
import NavbarComponent from '../Components/NavbarComponent';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Call the Django backend API to check login
            const response = await fetch('http://localhost:8000/auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Successful login
                console.log('Login successful!');
            } else {
                // Handle login failure, show error message, etc.
                console.log('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            // Call the Django backend API to check login
            const response = await fetch('http://localhost:8000/auth/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                // Successful login
                console.log('Signup successful!');
            } else {
                // Handle login failure, show error message, etc.
                console.log('Signup failed.');
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <>
        <main>
            <div className='container'>
                <div className='column1'>

                </div>
                <div className='column2'>
            <form onSubmit={handleLogin}>
                <center>
                    <h1>Log In</h1>

                    <label htmlFor="username">Username: </label><br />
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br />

                    <label htmlFor="password">Password: </label><br />
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br />

                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignup}>Signup</button>
                </center>
            </form>
            </div>
            <div className='column1'>
                
            </div>
            </div>
            </main>
       </>

    );
}
