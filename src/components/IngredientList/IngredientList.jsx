import PropTypes from 'prop-types';
import React from 'react';

function juntaArray(arr1, arr2) {
  return arr1.map((ing, i) => ing + arr2[i]);
}

const IngredientList = (props) => {
  const { receita } = props;
  console.log('receita maldita', receita)
  if (receita) {
    const ingredientes = Object.keys(receita).filter((e) => e.includes('Ingredient'));
    const quantidades = Object.keys(receita).filter((e) => e.includes('Measure'));

    return (
      <div>
        <h2>Ingredientes</h2>
        <div>
          {ingredientes.map((e, i) => {
            if (receita[e] !== "") {
              return (
                <li key={i} data-testid={`${i}-ingredient-name-and-measure`}>
                  {receita[e]}
                </li>
              );
            }
            return null;
          })}
        </div>
        <div>
          {quantidades.map((e, i) => {
            if (receita[e] !== " ") {
              return (
                <li key={i} data-testid={`${i}-ingredient-name-and-measure`}>
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
