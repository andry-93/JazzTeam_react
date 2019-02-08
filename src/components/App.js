import React, {Component} from 'react';
import '../styles/App.css';
import Logotype from '../img/logo_jazzteam-300x135.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  render() {
    return (
      <div className="main">
        {this.getBody()}
        <div className="wrap">
          <header>
            <a href="#" className="bars" onClick={this.toggleMenu}>
              <i className="fas fa-bars"></i>
            </a>
            <a href="#" className="logo">
              <img src={Logotype} alt="JazzTeam"/>
            </a>
          </header>
          <main className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nostrum facere, tempore sint optio error iste eos accusamus enim rerum qui modi delectus minima hic distinctio non numquam voluptatem quaerat.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime quod impedit sit blanditiis id corrupti! Praesentium quasi maxime blanditiis veniam, eligendi perspiciatis omnis itaque, et porro possimus quaerat pariatur similique.
            </p>
          </main>
          <footer>© Copyright</footer>
        </div>
      </div>
    );
  }

  getBody() {
    if (!this.state.isOpen) {
      return null;
    }
    return (
      <aside>
        <a href="#" className="close" onClick={this.toggleMenu}>
          <i className="fas fa-times-circle"></i>
        </a>
        <nav className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Info</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
      </aside>
    );
	}

  toggleMenu() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}
