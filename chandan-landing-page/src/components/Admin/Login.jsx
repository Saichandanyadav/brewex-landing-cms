import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      toast.success('Login successful');
      navigate('/admin');
    } else {
      toast.error(data.message || 'Login failed');
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Admin Login</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button className="secondary-btn" onClick={() => navigate('/register')}>Not Registered yet? Register</button>
    </div>
  );
}

export default Login;
