import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as Routes from './Routes';
import '../styles/App.css';
import Header from './Header';
import Sidebar from './Sidebar';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    this.showMenu();
  }

  componentDidUpdate() {
    this.showMenu();
  }

  getAsideRef = (node) => { this.asideEl = node; };

  getContentRef = (node) => { this.contentEl = node; };

  toggleMenu = (event) => {
    const { isOpen } = this.state;
    event.preventDefault();
    this.setState({
      isOpen: !isOpen,
    });
  };

  showMenu = () => {
    const { state } = this;
    if (!state.isOpen) {
      if (this.asideEl && this.contentEl) {
        this.asideEl.style.transform = 'translate(-300px)';
        this.contentEl.style.transform = 'translate(0px)';
      }
    } else if (this.asideEl && this.contentEl) {
      this.asideEl.style.transform = 'translate(0px)';
      this.contentEl.style.transform = 'translate(0px)';
    }
  };

  render() {
    const { getAsideRef, toggleMenu, getContentRef } = this;
    return (
      <BrowserRouter>
        <div className="main">
          <aside ref={getAsideRef}>
            <Sidebar toggleMenu={toggleMenu} />
          </aside>
          <div className="wrap" ref={getContentRef}>
            <Header toggleMenu={toggleMenu} />
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
