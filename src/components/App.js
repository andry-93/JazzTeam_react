import React, {Component} from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import * as Routes from './Routes';
import '../styles/App.css';
import Logotype from '../img/logo_jazzteam-300x135.png';
import Nav from './Nav';

export default class App extends Component {
  state = {
    isOpen: false,
  }

  getAsideRef = (node) => { this._asideEl = node };
  getContentRef = (node) => { this._contentEl = node };

  render() {
    
    return (
      <BrowserRouter>
        <div className="main">
          <aside ref={this.getAsideRef}>
            <div className="img_profile" style={{backgroundImage: "url(https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg)"}}>
              <span className='img_title'>Profile title</span>
            </div>
            <a href="#" className="close" onClick={this.toggleMenu}>
              <i className="fas fa-times-circle"></i>
            </a>
            <Nav />
          </aside>
          <div className="wrap" ref={this.getContentRef}>
            <header>
              <a href="#" className="bars" onClick={this.toggleMenu}>
                <i className="fas fa-bars"></i>
              </a>
              <Link to="/" className="logo">
                <img src={Logotype} alt="JazzTeam"/>
              </Link>
            </header>
            <main className="content">
              <Route exact path="/" component={Routes.Home} />
              <Route path="/login" component={Routes.Login} />
              <Route path="/info" component={Routes.Info} />
              <Route path="/profile" component={Routes.Profile} />
            </main>
            <footer>© Copyright</footer>
          </div>
        </div>
      </BrowserRouter>
    );
  }

  toggleMenu = (event) => {
    event.preventDefault()
		this.setState({
			isOpen: !this.state.isOpen
		})
  }

  getBody() {
    if (!this.state.isOpen) {
      if (this._asideEl && this._contentEl) {
        this._asideEl.style.transform = "translate(-310px)";
        this._contentEl.style.transform = "translate(0px)";
      }
    } else {
      if (this._asideEl && this._contentEl) {
        this._asideEl.style.transform = "translate(0px)";
        this._contentEl.style.transform = "translate(300px)";
      }
    }
  }
  
  componentDidUpdate() {
    this.getBody()
  }
  componentDidMount() {
    this.getBody()
  }
}
