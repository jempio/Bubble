// src/components/GoogleSignIn.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const GoogleSignIn = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    console.log('Google Sign-In button clicked'); // Log for debugging
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Signed in with Google:', result.user);
      navigate('/home'); // Redirect to home or another page after sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>
      Continue with Google
    </button>
  );
};

export default GoogleSignIn;
