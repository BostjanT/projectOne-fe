import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import ProfileSettings from './pages/ProfileSettings';
import CreateQuote from './pages/CreateQuote';
import ChangePassword from './components/User/ChangePassword';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profileSettings' element={<ProfileSettings />} />
        <Route path='/changePassword' element={<ChangePassword />} />
        <Route path='/createQuote' element={<CreateQuote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
