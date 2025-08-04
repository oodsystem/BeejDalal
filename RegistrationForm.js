import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    userType: 'Farmer', // default
    country: '' // Added country to formData
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data to the backend
    fetch('http://localhost:5000/register', {  // Adjust to your backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // Tell backend that we're sending JSON
      },
      body: JSON.stringify(formData),  // Send the form data as JSON
    })
    .then(response => response.json())  // Parse the JSON response from backend
    .then(data => {
      // Handle successful registration
      alert(data.message || 'Registration successful');
    })
    .catch(err => {
      // Handle any errors
      alert('Error registering user');
      console.error('Error:', err);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', marginTop: '2rem' }}>
      <div>
        <label>Full Name:</label><br />
        <input
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

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
        <label>Country:</label><br />
        <input
          name="country"  // Make sure this matches the state name
          type="text"
          value={formData.country}
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

      <div>
        <label>Phone Number:</label><br />
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div>
        <label>Address:</label><br />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>

      <div>
        <label>User Type:</label><br />
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        >
          <option value="Farmer">Farmer</option>
          <option value="Buyer">Buyer</option>
        </select>
      </div>

      <button type="submit" style={{ padding: '10px 15px' }}>
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
