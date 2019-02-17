import React from 'react';

import Nav from './Nav';
import User from './User';

export default function Sidebar(props) {
  const prop = props;
  const { toggleMenu } = prop;
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
