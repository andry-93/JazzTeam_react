import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from './Nav';
import User from './User';
import './style.css';

function Sidebar(props) {
  const prop = props;
  const { toggleMenu } = props;
  return (
    <div>
      <User authActive={prop.authActive} authUser={prop.authUser} />
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

const mapStateToProps = state => ({
  authActive: state.authInfo.authActive,
  authUser: state.authInfo.authUser,
});

export default connect(mapStateToProps)(Sidebar);
