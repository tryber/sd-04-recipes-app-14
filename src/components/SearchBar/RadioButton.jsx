import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { addSearchRadio } from '../../action/actionSearch';

function RadioButton({ inputRadio }) {
  return (
    <div>
      <label id="ingrediente" htmlFor="ingrediente">
        <input
          onChange={(event) => inputRadio(event.target.value)}
          id="ingrediente"
          type="radio"
          data-testid="ingredient-search-radio"
          name="radio-button-searchbar"
          value="ingrediente"
        />
        Ingredientee
      </label>
      <label id="nome" htmlFor="Nome">
        <input
          onChange={(event) => inputRadio(event.target.value)}
          id="nome"
          type="radio"
          data-testid="name-search-radio"
          name="radio-button-searchbar"
          value="nome"
        />
        Nome
      </label>
      <label id="primeiraletra" htmlFor="primeiraletr">
        <input
          onChange={(event) => inputRadio(event.target.value)}
          id="primeiraletra"
          type="radio"
          data-testid="first-letter-search-radio"
          name="radio-button-searchbar"
          value="primeiraletra"
        />
        Primeira Letra
      </label>
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
