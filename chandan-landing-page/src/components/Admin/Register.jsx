import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const res = await fetch('https://chandan-brewex-landing-cms.onrender.com/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      toast.success('Registered successfully');
      navigate('/login');
    } else {
      toast.error(data.message || 'Registration failed');
    }
  };

  return (
    <div className="admin-form-container">
      <h2>Register Admin</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
      <button className="secondary-btn" onClick={() => navigate('/login')}>Already registered? Login</button>
    </div>
  );
}

export default Register;
