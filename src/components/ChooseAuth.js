// src/components/ChooseAuth.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';

const ChooseAuth = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Welcome to Bubble, Create an Account</h2>
      <GoogleSignIn />
      <button onClick={() => navigate('/signup')}>Sign Up with Email</button>
      <button onClick={() => navigate('/signin')}>Already have an account? Sign In</button>
    </div>
  );
};

export default ChooseAuth;
