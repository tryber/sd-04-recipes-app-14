import React from 'react';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import './Styles/Cards.css';

const Drinks = () => (
  <div>
    <Header />
    <div className="div-page-cards">
      <RenderDrinks />
    </div>
    <Footer />
  </div>
);

export default Drinks;
