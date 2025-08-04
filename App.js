import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Ensure Routes and Route are imported
import Home from './Home';  // Home page with Login and Sign Up buttons
import Login from './Login';  // Login page
import Signup from './Signup';  // Sign Up page
import RegistrationForm from './RegistrationForm';  // Registration Form page
import Dashboard from './Dashboard';  // Dashboard page

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to BeejDalal 🌾</h1>
        <p>Please register as a Farmer or Buyer. Your registration will be reviewed by admin.</p>

        {/* React Router: Routes to handle different routes */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home page with Login/Sign Up */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/signup" element={<Signup />} />  {/* Sign Up page */}
          <Route path="/register" element={<RegistrationForm />} />  {/* Registration form */}
          <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
