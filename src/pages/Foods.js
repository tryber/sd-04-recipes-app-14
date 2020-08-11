import { useSelector } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import './Styles/Cards.css';
import FilterMeal from '../components/Filter/FilterMeal';
import RenderBusca from '../components/SearchBar/RenderBusca';

const Foods = ({ search = true, name = 'Comidas' }) => {
  const changeRender = useSelector((state) => state.ChangeRender.render);
  return (
    <div>
      <Header search={search} name={name} />
      <div>
        <div className="div-page-cards">{!changeRender ? <RenderBusca /> : <FilterMeal />}</div>
        <Footer />
      </div>
    </div>
  );
};

Foods.propTypes = {
  search: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Foods;
