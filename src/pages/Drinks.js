import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RenderDrinks from '../components/RenderCards/RenderDrinks';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterDrinks from '../components/Filter/FilterDrink';
import './Styles/Cards.css';

const Drinks = ({ search }) => (
  <div>
    <Header search={search} />
    <div>
      <FilterDrinks />
      <div className="div-page-cards">
        <RenderDrinks />
      </div>
      <Footer />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  search: state.buildSearchBtnReducer.isShow,
});

Drinks.propTypes = {
  search: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Drinks);
