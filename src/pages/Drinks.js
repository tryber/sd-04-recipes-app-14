import React from 'react';
import PropTypes from 'prop-types';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Styles/Cards.css';

const Drinks = ({ search = true, name = 'Bebidas' }) => (
  <div>
    <Header search={search} name={name} />
    <div>
      <div className="div-page-cards">
        <RenderDrinks />
      </div>
      <Footer />
    </div>
  </div>
);

Drinks.propTypes = {
  search: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Drinks;
