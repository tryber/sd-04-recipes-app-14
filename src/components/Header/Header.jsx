import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onClick = this.onClick.bind(this);
    this.buildSearchBtn = this.buildSearchBtn.bind(this);
  }

  onClick() {
    const { show } = this.state;
    if (show === false) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  }

  buildSearchBtn() {
    return (
      <button src={SearchIcon} data-testid="search-top-btn" onClick={this.onClick}>
        <img src={SearchIcon} alt="search-icon" />
      </button>
    );
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <Link className="perfil-btn" to="/perfil">
            <img data-testid="profile-top-btn" src={ProfileIcon} alt="profile-icon" />
          </Link>
          <h1 className="page-title" data-testid="page-title">
            {this.props.name}
          </h1>
          {this.props.search && this.buildSearchBtn()}
        </div>
        {this.state.show && <SearchBar />}
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.bool.isRequired,
};

export default Header;
