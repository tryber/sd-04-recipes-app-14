import React from 'react';
import { useHistory } from 'react-router-dom';

const ExploreButtons = ({ type }) => {
  const history = useHistory();
  const redirectTo = (path) => {
    history.push(`/explorar/${type}/${path}`);
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          redirectTo('ingredientes');
        }}
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
      {type === 'comidas' && (
        <button
          type="button"
          onClick={() => {
            redirectTo('area');
          }}
          data-testid="explore-by-area"
        >
          Por Local de Origem
        </button>
      )}
      <button
        type="button"
        onClick={() => {
          redirectTo();
        }}
        data-testid="explore-surprise"
      >
        Me surpreenda!
      </button>
    </div>
  );
};

export default ExploreButtons;
