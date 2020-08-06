import React from 'react';

const Instructions = (props) => {
  const { strInstructions } = props;
  return (
    <div>
      <h3>Instruções</h3>
      <span data-testid="instructions">{strInstructions}</span>
    </div>
  );
};

export default Instructions;
