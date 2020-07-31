import React from 'react';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import './Header.css';

const Header = () => {
  function onClick() {
    const searchBar = document.querySelector('.content');
    if (searchBar.style.display === 'block') {
      searchBar.style.display = 'none';
    } else {
      searchBar.style.display = 'block';
    }
  }

  return (
    <div>
      <div className="header-container">
        <a href="/perfil" data-testid="profile-top-btn">
          <img src={ProfileIcon} alt="profile-icon" />
        </a>
        <h1 data-testid="page-title">Comidas</h1>
        <button data-testid="search-top-btn" onClick={onClick}>
          <img src={SearchIcon} alt="search-icon" />
        </button>
      </div>
      <div className="content">
        <div>Alou</div>
      </div>
    </div>
  );
};

export default Header;
