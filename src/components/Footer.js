import React from 'react';
import { Link } from 'react-router-dom';
import DrinkLogo from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealLogo from '../images/mealIcon.svg';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <Link to="/bebidas" data-testid="drinks-bottom-btn">
      <img src={DrinkLogo} alt="Drink logo" />
    </Link>
    <Link to="/explorar" data-testid="explore-bottom-btn">
      <img src={ExploreIcon} alt="Explore logo" />
    </Link>
    <Link to="/comidas" data-testid="food-bottom-btn">
      <img src={MealLogo} alt="Meal logo" />
    </Link>
  </footer>
);

export default Footer;
