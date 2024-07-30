// src/components/LoadingPage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/choose-auth');
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
