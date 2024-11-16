
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://localhost:7161/api/Login/login', {
                UserName: username, // Make sure this matches your API
                Password: password,
            });

            if (response.status === 200) {
                alert('Login successful!');
                 setUsername('');
                setPassword('');
                setContactNumber('');
                setEmail('');
                // Optionally, save the token or user info in local storage 
                // or redirect the user to a different page (e.g., to a dashboard).
            }
        } catch (error) {
            setError('Invalid username or password');
            console.error(error); // Log the error for debugging
        }
    };
  
    return (
        <div className="container">
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                 <br></br>   <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
