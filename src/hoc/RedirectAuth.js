import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function redirectAuth(Component) {
  class RedirectAuth extends React.Component {
    authDate = (authActive, redirect, component) => (authActive === false ? <Redirect to={redirect} /> : component);

    render() {
      const { props } = this;
      return this.authDate(props.authActive,
        '/login',
        <Component {...props} />);
    }
  }

  RedirectAuth.propTypes = {
    authActive: PropTypes.bool.isRequired,
  };

  RedirectAuth.displayName = `RedirectAuth(${Component.displayName || Component.name || 'Component'})`;

  return RedirectAuth;
}

export default redirectAuth;
