import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Styles/Cards.css';
import FilterDrink from '../components/Filter/FilterDrink';
import RenderBusca from '../components/SearchBar/RenderBusca';

const Drinks = ({ search = true, name = 'Bebidas' }) => {
  const changeRender = useSelector((state) => state.ChangeRender.render);
  return (
    <div>
      <Header search={search} name={name} />
      <div>
        <div className="div-page-cards">
          <div className="div-page-cards">{!changeRender ? <RenderBusca /> : <FilterDrink />}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
Drinks.propTypes = {
  search: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Drinks;
