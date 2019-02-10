import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const prop = props;
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}
