import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/table">Table</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}
