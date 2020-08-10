import React from 'react';
import PropTypes from 'prop-types';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Styles/Cards.css';

const Foods = ({ search = true, name = 'Comidas' }) => (
  <div>
    <Header search={search} name={name} />
    <div>
      <div className="div-page-cards">
        <RenderFoods />
      </div>
      <Footer />
    </div>
  </div>
);

Foods.propTypes = {
  search: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Foods;
