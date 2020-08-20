import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';

const Perfil = ({ name = 'Perfil', email }) => {
  const history = useHistory();
  const redirectTo = (path) => {
    if (path === '/') {
      localStorage.clear();
      history.push(path);
    }
    history.push(path);
  };
  return (
    <div>
      <Header name={name} />
      <p data-testid="profile-email">{email}</p>
      <button
        type="button"
        className="btn btn-secondary"
        data-testid="profile-done-btn"
        onClick={() => {
          redirectTo('/receitas-feitas');
        }}
      >
        Receitas Feitas
      </button>
      <button
        className="btn btn-secondary"
        type="button"
        data-testid="profile-favorite-btn"
        onClick={() => {
          redirectTo('/receitas-favoritas');
        }}
      >
        Receitas Favoritas
      </button>
      <button
        className="btn btn-secondary"
        type="button"
        data-testid="profile-logout-btn"
        onClick={() => {
          redirectTo('/');
        }}
      >
        Sair
      </button>
      <Footer />
    </div>
  );
};

Perfil.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
});

export default connect(mapStateToProps)(Perfil);
