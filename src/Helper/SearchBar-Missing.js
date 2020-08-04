import React from 'react';
import { Redirect } from 'react-router-dom';

const oneResultOrError = (data, tipo, id) => {
  if (data === null) {
    return <p>Sinto muito, não encontramos nenhuma receita para esses filtros.</p>;
  }
  if (data.length === 1 && id === 'idMeal') return <Redirect to={`/${tipo}/${data[0].idMeal}`} />;
  return <Redirect to={`/${tipo}/${data[0].idDrink}`} />;
};

export default oneResultOrError;
