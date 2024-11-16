
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Ensure you have appropriate CSS for styling

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState(''); // New state for email
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = axios.post('https://localhost:7161/api/Login/register', {
                Username: username, // Ensure this matches your API
                Password: password,
                ContactNumber: contactNumber,
                Email: email // Include email in the request
            });

            if (response.status === 201) {
                setSuccess('Registration successful!');
                // Clear form fields if necessary
                setUsername('');
                setPassword('');
                setContactNumber('');
                setEmail(''); // Clear email field
            }
        } catch (error) {
            setError('Registration failed. Please check your input.');
            console.error(error); // Log the error for debugging
            setUsername('');
            setPassword('');
            setContactNumber('');
            setEmail('');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="tex"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email: {/* Added Email Field */}
                        <input
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="pass"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Contact Number:
                        <input
                            type="tel"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                            required
                        />
                    </label>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;