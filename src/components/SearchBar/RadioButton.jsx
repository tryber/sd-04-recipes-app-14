import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addSearchRadio } from '../../actions/actionSearch';

function RadioButton({ inputRadio }) {
  return (
    <div>
      <input
        onChange={(event) => inputRadio(event.target.value)}
        id="ingrediente"
        type="radio"
        data-testid="ingredient-search-radio"
        name="radio-button-searchbar"
        value="ingrediente"
      />
      <label id="ingrediente" htmlFor="ingrediente">
        Ingrediente
      </label>
      <input
        onChange={(event) => inputRadio(event.target.value)}
        id="nome"
        type="radio"
        data-testid="name-search-radio"
        name="radio-button-searchbar"
        value="nome"
      />
      <label htmlFor="nome">Nome</label>
      <input
        onChange={(event) => inputRadio(event.target.value)}
        id="primeiraletra"
        type="radio"
        data-testid="first-letter-search-radio"
        name="radio-button-searchbar"
        value="primeiraletra"
      />
      <label htmlFor="primeiraletra">Primeira Letra</label>
    </div>
  );
}

RadioButton.propTypes = {
  inputRadio: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  inputRadio: (e) => dispatch(addSearchRadio(e)),
});

export default connect(null, mapDispatchToProps)(RadioButton);
