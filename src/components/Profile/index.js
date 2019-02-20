import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Table from './Table';
import './style.css';

function Profile(props) {
  const prop = props;
  return (prop.authActive === false)
    ? (<Redirect to="/login" />)
    : (
      <section className="full-section">
        <h1>Profile</h1>
        <Table authActive={prop.authActive} authUser={prop.authUser} />
      </section>
    );
}

const mapStateToProps = state => ({
  authActive: state.authInfo.authActive,
  authUser: state.authInfo.authUser,
});

export default connect(mapStateToProps)(Profile);
