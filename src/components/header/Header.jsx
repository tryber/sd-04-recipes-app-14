import React from 'react';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import './Header.css';

const Header = () => {
  console.log(document.URL);
  console.log(document.title);
  
  function setVisible() {
    const url = document.URL;
    const searchIc = document.querySelector('.search-icon');
    console.log(searchIc);
    if(url.includes('perfil')) {
    return searchIc.style.display = 'none';
  } else {
    return  searchIc.style.display = 'block';
  }
  }
  

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
        <button className="search-icon" data-testid="search-top-btn" onClick={onClick}>
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
