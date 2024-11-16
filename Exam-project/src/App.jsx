// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Login from './Component/Login';
import Register from './Component/Register';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <nav>
                  
                          <Link to="/">Login</Link><br></br>
                                          
                          <Link to="/register">Register</Link>         
                  
              </nav>
                  
                
            </div>
        </Router>
    );
}

export default App;


