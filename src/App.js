// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';
import ChooseAuth from './components/ChooseAuth';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/choose-auth" element={<ChooseAuth />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
