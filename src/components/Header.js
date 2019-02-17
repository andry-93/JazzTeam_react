import React from 'react';

import { Link } from 'react-router-dom';
import Logotype from '../img/logo_jazzteam-300x135.png';

export default function Header(props) {
  const prop = props;
  const { toggleMenu } = prop;
  return (
    <header>
      <button type="button" className="bars" onClick={toggleMenu}>
        <i className="fas fa-bars" />
      </button>
      <Link to="/" className="logo">
        <img src={Logotype} alt="JazzTeam" />
      </Link>
    </header>
  );
}
