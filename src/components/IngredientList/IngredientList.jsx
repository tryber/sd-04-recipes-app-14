import React from 'react';

const IngredientList = (props) => {
  const { receita } = props;
  if (receita) {
    console.log(receita);
    const ingredientes = Object.keys(receita).filter((e) => e.includes('Ingredient'));
    const quantidades = Object.keys(receita).filter((e) => e.includes('Measure'));
    console.log(ingredientes);
    console.log(quantidades);
    return (
      <div>
        <h2>Ingredientes</h2>
        <div>
          {ingredientes.map((e, i) => {
            if (receita[e] !== null)
              return (
                <li key={i} data-testid={`${i}-ingredient-name-and-measure`}>
                  {receita[e]}
                </li>
              );
            console.log('ing', i);
          })}
        </div>
        <div>
          {quantidades.map((e, i) => {
            if (receita[e] !== null)
              return (
                <li key={i} data-testid={`${i}-ingredient-name-and-measure`}>{receita[e]}</li>
              );
            console.log(i);
          })}
        </div>
      </div>
    );
  }
  return null;
};

export default IngredientList;
