import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import setAuthAction from '../actions/actionAuth';
import { auth } from '../dateJSON';

class Login extends Component {
  state = {
    error: false,
  }

  render() {
    if(this.props.authActive === true) {
      return (<Redirect to="/profile" />);
    }
    return (
      <div className="login">
        <form>
          <h2>Please login</h2>
          <div id="auth">
            <label>Username:</label><br/>
            <input type="name" placeholder="username..." id="name"/><br/>
            <label>Password:</label><br/>
            <input type="password" placeholder="password..." id="password"/>
          </div>
          {this.getError()}
          <div id="lower">
            <input type="submit" onClick={this.onAuthorisation} value="Login"/>
          </div>
        </form>
      </div>
    );
  }

  getError() {
    if (this.state.error) {
      return (
        <div className="login_error">Имя пользователя или пароль введены неверно</div>
      )
    } return undefined;
  }

  onAuthorisation = (event) => {
    event.preventDefault();
    const username = document.querySelector("#name").value,
      password = document.querySelector("#password").value;
    for (let i = 0; i < auth.length; i++) {
      if ((auth[i].username === username)&&(auth[i].password === password)) {
        this.setState({
          error: false
        });
        this.props.setAuthFunction(true);
        break;
      } else {
        if (this.state.error !== true) {
          this.setState({
            error: true
          });
        }
      }
    }
  }
}

function mapStateToProps(state) {
  return {
    authActive: state.authInfo.authActive,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAuthFunction: (authActive) => {
      dispatch(setAuthAction(authActive));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);