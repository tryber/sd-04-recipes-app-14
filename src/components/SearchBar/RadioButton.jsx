import React from 'react';

function RadioButton() {
  return (
    <div>
      <label id="ingrediente" htmlFor="ingrediente">
        Ingrediente
        <input
          id="ingrediente"
          type="radio"
          data-testid="ingredient-search-radio"
          name="radio-button-searchbar"
          value="ingrediente"
        ></input>
      </label>
      <label id="nome" htmlFor="Nome">
        Nome
        <input
          id="nome"
          type="radio"
          data-testid="name-search-radio"
          name="radio-button-searchbar"
          value="nome"
        ></input>
      </label>
      <label id="primeiraletra" htmlFor="primeiraletr">
        Primeira Letra
        <input
          id="primeiraletra"
          type="radio"
          data-testid="first-letter-search-radio"
          name="radio-button-searchbar"
          value="primeiraletra"
        ></input>
      </label>
    </div>
  );
}
export default RadioButton;
