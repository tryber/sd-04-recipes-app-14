import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';

function RenderDrinks({ drinks, isLoading }) {
  console.log(drinks);
  if (isLoading) return null;
  if (isLoading && drinks.length === 0)
    return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  return drinks.map((drink, index) => {
    if (index < 12) {
      return (
        <div className="foods-card" id={drink.idDrink} key={drink.strDrink}>
          <img className="picture-cards-food" src={drink.strDrinkThumb} alt={drink.strDrink} />
          <p>{drink.strDrink}</p>
        </div>
      );
    }
    return null;
  });
}

const mapStateToProps = (state) => ({
  drinks: state.reducerDrinks.Drinks,
  isLoading: state.reducerDrinks.isLoading,
});

export default connect(mapStateToProps)(RenderDrinks);
