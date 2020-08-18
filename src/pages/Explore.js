import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Explore = ({ name = 'Explorar' }) => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };
  return (
    <div>
      <Header name={name} />
      <button
        type="button"
        onClick={() => {
          redirectTo('/explorar/comidas');
        }}
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        onClick={() => {
          redirectTo('/explorar/bebidas');
        }}
        data-testid="explore-drinks"
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
};

Explore.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Explore;
