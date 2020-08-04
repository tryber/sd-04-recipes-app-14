import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer" data-testid="footer">
    <Link to="/bebidas">
      <img src={drinkIcon} alt="Drink logo" data-testid="drinks-bottom-btn" />
    </Link>
    <Link to="/explorar">
      <img src={exploreIcon} alt="Explore logo" data-testid="explore-bottom-btn" />
    </Link>
    <Link to="/comidas">
      <img src={mealIcon} alt="Meal logo" data-testid="food-bottom-btn" />
    </Link>
  </footer>
);

export default Footer;
