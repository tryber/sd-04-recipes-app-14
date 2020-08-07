import PropTypes from 'prop-types';
import React from 'react';

function juntaArray(arr1, arr2) {
  return arr1.map((ing, i) => ing + arr2[i]);
}

const criaArray = (lista, arr) => {
  return lista.map((ele, i) => {
    if (arr[ele] !== null) {
      return arr[ele];
    }
  });
};

const IngredientCheck = (props) => {
  const { receita } = props;
  if (receita) {
    const ingredientes = Object.keys(receita).filter((e) => e.includes('Ingredient'));
    const quantidades = Object.keys(receita).filter((e) => e.includes('Measure'));
    return (
      <div>
        {juntaArray(criaArray(ingredientes, receita), criaArray(quantidades, receita)).map(
          (item, i) => (
            <input data-testid={`${i}-ingredient-step`} type="checkbox" value={item} />
          )
        )}
      </div>
    );
  }
  return null;
};

IngredientCheck.propTypes = {
  receita: PropTypes.func.isRequired,
};

export default IngredientCheck;
