import PropTypes from 'prop-types';
import React from 'react';

const IngredientList = (props) => {
  const { receita } = props;
  if (receita) {
    const ingredientes = Object.keys(receita).filter((e) => e.includes('Ingredient'));
    const quantidades = Object.keys(receita).filter((e) => e.includes('Measure'));

    return (
      <div>
        <h2>Ingredientes</h2>
        <div>
          {ingredientes.map((e, i) => {
            if (receita[e] !== '') {
              return (
                <li data-testid={`${i}-ingredient-name-and-measure`}>
                  {receita[e]}
                </li>
              );
            }
            return null;
          })}
        </div>
        <div>
          {quantidades.map((e, i) => {
            if (receita[e] !== ' ') {
              return (
                <li data-testid={`${i}-ingredient-name-and-measure`}>
                  {receita[e]}
                </li>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
  return null;
};

IngredientList.propTypes = {
  receita: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default IngredientList;
