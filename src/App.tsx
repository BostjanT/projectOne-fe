import { useState } from 'react';

import './App.css';
import QuoteEdited from './components/QuoteConfirm/QuoteEdited';
import Quote from './components/Quote/Quote';
import CreateQuote from './pages/CreateQuote';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProfileSettings';
import SignUp from './pages/SignUp';
import Navigation from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Main />
      {/* 
      <Navigation />
      
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes> */}
    </>
  );
}

export default App;
