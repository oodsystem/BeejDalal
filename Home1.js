import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Welcome to BeejDalal 🌾</h2>
      <div>
        <Link to="/login">
          <button style={{ padding: '10px 15px', margin: '10px' }}>Login</button>
        </Link>
        <Link to="/signup">
          <button style={{ padding: '10px 15px', margin: '10px' }}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
