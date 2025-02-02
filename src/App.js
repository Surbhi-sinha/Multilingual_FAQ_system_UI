import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import FAQPage from './pages/FAQPage';
import LanguageSwitcher from './components/LangSwitcher';
import LanguageProvider from './context/LangContext';
import AuthProvider from './context/AuthContext';
import UserProvider from './context/UserContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/signup' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/faqpage' element={<FAQPage />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
