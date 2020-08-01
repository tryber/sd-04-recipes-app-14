import React from 'react';
import { connect } from 'react-redux';
import './Renders.css';

function RenderFoods({ foods }) {
  if (foods.length === 0) return <p>Nenhum pesquisa Feita</p>;
  return foods.map((food, index) => {
    if (index < 12) {
      return (
        <div className="foods-card" key={food.idMeal}>
          <img className="picture-cards-food" src={food.strMealThumb} alt={food.strMeal} />
          <p>{food.strMeal}</p>
        </div>
      );
    }
    return null;
  });
}

const mapStateToProps = (state) => ({
  foods: state.reducerFoods.Foods,
});

export default connect(mapStateToProps)(RenderFoods);
