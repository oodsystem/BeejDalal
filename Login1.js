import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Change useHistory to useNavigate

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Hook for navigation after login success

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add logic to verify login (you can use fetch to check with your backend)
    // For now, we assume login is always successful
    alert('Login Successful!');

    // Redirect to homepage or dashboard after successful login
    navigate('/dashboard');  // Adjust the route accordingly
  };

  return (
    <div style={{ maxWidth: '400px', marginTop: '2rem', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 15px' }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
