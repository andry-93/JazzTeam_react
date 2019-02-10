import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

function Profile(props) {
  const prop = props;
  if(prop.authActive === false) {
    return (<Redirect to="/login" />);
  }
  return (
    <section>
      Profile
    </section>
  );
}

function mapStateToProps(state) {
  return {
    authActive: state.authInfo.authActive,
  };
}

export default connect(mapStateToProps)(Profile);