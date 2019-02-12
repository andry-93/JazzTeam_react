import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import * as Routes from './Routes';
import '../styles/App.css';
import Logotype from '../img/logo_jazzteam-300x135.png';
import Nav from './Nav';
import User from './User';

export default class App extends Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {
    this.getBody();
  }

  componentDidUpdate() {
    this.getBody();
  }

  getAsideRef = (node) => { this.asideEl = node; };

  getContentRef = (node) => { this.contentEl = node; };

  getBody() {
    const { state } = this;
    if (!state.isOpen) {
      if (this.asideEl && this.contentEl) {
        this.asideEl.style.transform = 'translate(-300px)';
        this.contentEl.style.transform = 'translate(0px)';
      }
    } else if (this.asideEl && this.contentEl) {
      this.asideEl.style.transform = 'translate(0px)';
      this.contentEl.style.transform = 'translate(300px)';
    }
  }

  toggleMenu = (event) => {
    const { isOpen } = this.state;
    event.preventDefault();
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <aside ref={this.getAsideRef}>
            <User />
            <a href="#" className="close" onClick={this.toggleMenu}>
              <i className="fas fa-times-circle" />
            </a>
            <Nav />
          </aside>
          <div className="wrap" ref={this.getContentRef}>
            <header>
              <a href="#" className="bars" onClick={this.toggleMenu}>
                <i className="fas fa-bars" />
              </a>
              <Link to="/" className="logo">
                <img src={Logotype} alt="JazzTeam" />
              </Link>
            </header>
            <main className="content">
              <Route exact path="/" component={Routes.Home} />
              <Route path="/login" component={Routes.Login} />
              <Route path="/info" component={Routes.Info} />
              <Route path="/table" component={Routes.Table} />
              <Route path="/profile" component={Routes.Profile} />
            </main>
            <footer>© Copyright</footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
