import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import CMS from './components/CMS/CMS';
import Login from './components/Admin/Login';
import Register from './components/Admin/Register';
import { ToastContainer } from 'react-toastify';
import './App.css';

function Landing() {
  return (
    <>
      <Home />
      <Product />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<CMS />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
