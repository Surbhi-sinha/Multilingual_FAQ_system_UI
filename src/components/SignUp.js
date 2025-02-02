import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user' // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Form Data Submitted:', formData);

    try{
      const response = await axios.post(`http://localhost:5000/api/auth/register` , formData);
      alert(`${formData.role} Registered SuccessFully`)
    }catch(err){
      console.log('error registering : ', err);
      alert('Registration error');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Sign Up</h3>
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
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
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select
                    className="form-control"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <br />
                <button type="submit" className="btn btn-primary btn-block">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;