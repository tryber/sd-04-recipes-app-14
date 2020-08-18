import React, { Component } from 'react';
import { fetchFoodIngredient } from '../../service/ingredientApi';
import RenderFoodIng from '../RenderCards/RenderFoodIng';

class IngredientFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  }
  componentDidMount() {
    fetchFoodIngredient()
      .then((data) => data.meals.slice(0, 12))
      .then((ingredients) =>
        this.setState((state) => ({ ...state, ingredients })),
      );
  }
  render() {
    const { ingredients } = this.state;
    return (
      <div>
        {ingredients.map((foods, index) => (
          <RenderFoodIng foods={foods} index={index} />
        ))}
      </div>
    );
  }
}

export default IngredientFood;
