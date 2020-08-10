import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RenderFoods from '../components/RenderCards/RenderFoods';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterFoods from '../components/Filter/FilterMeal'
import './Styles/Cards.css';

const Foods = ({ search }) => (
  <div>
    <Header search={search} />
    <div>
      <FilterFoods />
      <div className="div-page-cards">
        <RenderFoods />
      </div>
      <Footer />
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  search: state.buildSearchBtnReducer.isShow,
});

Foods.propTypes = {
  search: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Foods);
