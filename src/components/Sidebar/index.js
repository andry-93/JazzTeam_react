import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';
import User from './User';

export default function Sidebar(props) {
  const { toggleMenu } = props;
  return (
    <div>
      <User />
      <button type="button" className="close" onClick={toggleMenu}>
        <i className="fas fa-times-circle" />
      </button>
      <Nav />
    </div>
  );
}

Sidebar.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
