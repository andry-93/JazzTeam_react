import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Logotype from '../../img/logo_jazzteam-300x135.png';
import User from './User';
import './style.css';

function Header(props) {
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
      <User authActive={prop.authActive} authUser={prop.authUser} />
    </header>
  );
}

const mapStateToProps = state => ({
  authActive: state.authInfo.authActive,
  authUser: state.authInfo.authUser,
});

export default connect(mapStateToProps)(Header);
