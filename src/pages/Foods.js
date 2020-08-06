import React from 'react';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/header/Header';
import './Styles/Cards.css';

const Foods = () => (
  <div>
    <Header />
    <div className="div-page-cards">
      <RenderFoods />
    </div>
    <Footer />
  </div>
);

export default Foods;
