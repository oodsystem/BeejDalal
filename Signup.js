import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div style={{ maxWidth: '400px', marginTop: '2rem', padding: '20px' }}>
      <h2>Sign Up</h2>
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      
      {/* Link to the Registration Form page */}
      <Link to="/register">
        <button style={{ padding: '10px 15px' }}>
          Go to Registration Form
        </button>
      </Link>
    </div>
  );
}

export default Signup;
