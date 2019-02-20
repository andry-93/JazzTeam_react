import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import setAuthAction from '../../actions/actionAuth';
import setUserAction from '../../actions/actionUser';
import auth from '../../dateJSON';
import './style.css';

class Login extends Component {
  state = {
    error: false,
    login: '',
    password: '',
  };

  onAuthorisation = (event) => {
    const { state } = this;
    event.preventDefault();
    const { login, password } = state;
    let error = false;
    let authUser = null;
    for (let i = 0; i < auth.length; i += 1) {
      if ((auth[i].username === login) && (auth[i].password === password)) {
        error = false;
        authUser = auth[i];
        break;
      } error = true;
    }
    this.authState(error, authUser);
  };

  authState = (error, authUser) => {
    const { props } = this;
    this.setState({
      error,
    });
    props.setAuthFunction(!error);
    props.setUserFunction(error
      ? {}
      : authUser);
  };

  getError = () => {
    const { state } = this;
    return (state.error)
      ? <div className="login_error">Имя пользователя или пароль введены неверно</div>
      : null;
  };

  updateLogin = (evt) => {
    this.setState({
      login: evt.target.value,
    });
  };

  updatePassword = (evt) => {
    this.setState({
      password: evt.target.value,
    });
  };

  render() {
    const { props, state } = this;
    return (props.authActive === true)
      ? (<Redirect to="/profile" />)
      : (
        <div className="login">
          <form>
            <h2>Please login</h2>
            <div id="auth">
              <label htmlFor="name">
                <span>Username:</span>
                <br />
                <input type="name" value={state.login} onChange={evt => this.updateLogin(evt)} placeholder="username..." id="name" />
              </label>
              <br />
              <label htmlFor="password">
                <span>Password:</span>
                <br />
                <input type="password" value={state.password} onChange={evt => this.updatePassword(evt)} placeholder="password..." id="password" />
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
