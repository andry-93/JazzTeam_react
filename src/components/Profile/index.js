import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

function Profile(props) {
  const prop = props;
  if (prop.authActive === false) {
    return (<Redirect to="/login" />);
  }
  return (
    <section className="full-section">
      <h1>Profile</h1>
      <table>
        <tbody>
          <tr>
            <th>Username:</th>
            <td>{prop.authUser.username}</td>
          </tr>
          <tr>
            <th>First Name:</th>
            <td>{prop.authUser.firstName}</td>
          </tr>
          <tr>
            <th>Last Name:</th>
            <td>{prop.authUser.lastName}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

const mapStateToProps = state => ({
  authActive: state.authInfo.authActive,
  authUser: state.authInfo.authUser,
});

export default connect(mapStateToProps)(Profile);
