import React, { useState } from 'react';
import "../components/Login.css"

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false); 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Sign-up logic here
      console.log('Sign Up:', formData);
      alert('Account created successfully!');
    } else {
      // Login logic here
      console.log('Login:', formData);
      alert('Logged in successfully!');
    }

    // Clear form after submission
    setFormData({ username: '', password: '' });
  };

  return (
    <div className="login-container">
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-btn">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <button className="toggle-btn" onClick={() => setIsSignUp((prev) => !prev)} >
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
}
