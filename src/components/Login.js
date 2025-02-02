import React, { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Login = () => {

   const {login} = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Handle input field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Dynamically update the state field by name
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login Data Submitted:', formData);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert('Login Successful');
      login(response.data.token);
      localStorage.setItem('token' , response.data.token);
      console.log('Response:', response);
    } catch (err) {
      console.error('Error logging in:', err);
      alert('Login error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"  
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
