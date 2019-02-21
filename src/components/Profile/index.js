import React from 'react';
import { connect } from 'react-redux';

import Table from './Table';
import './style.css';
import RedirectAuth from '../../hoc/RedirectAuth';

function Profile(props) {
  const prop = props;
  return (
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

export default connect(mapStateToProps)(RedirectAuth(Profile));
