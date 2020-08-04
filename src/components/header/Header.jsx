import React, { Component } from 'react';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

class Header extends Component {
  static setName() {
    if (document.URL.includes('comidas')) {
      return <h1 data-testid="page-title">Comidas</h1>;
    }
    if (document.URL.includes('bebidas')) {
      return <h1 data-testid="page-title">Bebidas</h1>;
    }
    if (document.URL.includes('perfil')) {
      return <h1 data-testid="page-title">Perfil</h1>;
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { show } = this.state;
    if (show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <a href="/perfil">
            <img
              data-testid="profile-top-btn"
              src={ProfileIcon}
              alt="profile-icon"
            />
          </a>
          {Header.setName()}
          <button data-testid="search-top-btn" onClick={this.onClick}>
            <img src={SearchIcon} alt="search-icon" />
          </button>
        </div>
        {this.state.show && <SearchBar />}
      </div>
    );
  }
}

export default Header;
