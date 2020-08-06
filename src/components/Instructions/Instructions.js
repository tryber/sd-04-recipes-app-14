import PropTypes from 'prop-types';
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

Instructions.propTypes = {
  strInstructions: PropTypes.string.isRequired,
};

export default Instructions;
