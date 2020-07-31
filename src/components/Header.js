import React, { Component } from "react";
import { Drinks } from "../pages";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    const searchBar = document.querySelector('.content');
    if (searchBar.style.display === "block") {
      searchBar.style.display = "none";
    } else {
      searchBar.style.display = "block";
    }
  }
  render() {
    return (
      <div>
        <div className="header-container">
          <a href="/perfil" data-testid="profile-top-btn">
            <img src="./profileIcon.svg" alt="profile-icon" />
          </a>
          <h1 data-testid="page-title">Comidas</h1>
          <button data-testid="search-top-btn" onClick={this.onClick}>
            <img src="./searchIcon.svg" alt="search-icon" />
          </button>
        </div>
        <div className="content"><Drinks /></div>
      </div>
    );
  }
}
