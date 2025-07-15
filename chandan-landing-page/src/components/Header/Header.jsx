import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            Service <span className="dropdown">▼</span>
          </li>
          <li className="nav-item">
            <Link to="/register" className="admin-link">Admin</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
