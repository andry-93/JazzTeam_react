import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import setAuthAction from '../../actions/actionAuth';
import setUserAction from '../../actions/actionUser';
import auth from '../../dateJSON';

class Login extends Component {
  state = {
    error: false,
  }

  onAuthorisation = (event) => {
    const { props, state } = this;
    event.preventDefault();
    const username = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
    for (let i = 0; i < auth.length; i += 1) {
      if ((auth[i].username === username) && (auth[i].password === password)) {
        this.setState({
          error: false,
        });
        props.setAuthFunction(true);
        props.setUserFunction(auth[i]);
        break;
      } else if (state.error !== true) {
        this.setState({
          error: true,
        });
      }
    }
  }

  getError = () => {
    const { state } = this;
    if (state.error) {
      return (
        <div className="login_error">Имя пользователя или пароль введены неверно</div>
      );
    } return undefined;
  }

  render() {
    const { props } = this;
    if (props.authActive === true) {
      return (<Redirect to="/profile" />);
    }
    return (
      <div className="login">
        <form>
          <h2>Please login</h2>
          <div id="auth">
            <label htmlFor="name">
              Username:
              <br />
              <input type="name" placeholder="username..." id="name" />
            </label>
            <br />
            <label htmlFor="password">
              Password:
              <br />
              <input type="password" placeholder="password..." id="password" />
            </label>
          </div>
          {this.getError()}
          <div id="lower">
            <input type="submit" onClick={this.onAuthorisation} value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authActive: state.authInfo.authActive,
});

const mapDispatchToProps = dispatch => ({
  setAuthFunction: (authActive) => {
    dispatch(setAuthAction(authActive));
  },
  setUserFunction: (authUser) => {
    dispatch(setUserAction(authUser));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
