import React, { Component } from 'react';
import { fetchDrinkIngredient } from '../../service/ingredientApi';
import RenderDrinkIng from '../RenderCards/RenderDrinkIng';

class IngredientDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
    };
  }
  componentDidMount() {
    fetchDrinkIngredient()
      .then((data) => data.drinks.slice(0, 12))
      .then((ingredients) =>
        this.setState((state) => ({ ...state, ingredients })),
      );
  }
  render() {
    const { ingredients } = this.state;
    console.log(ingredients);
    return (
      <div>
        {ingredients.map((foods, index) => (
          <RenderDrinkIng foods={foods} index={index} />
        ))}
      </div>
    );
  }
}

export default IngredientDrink;
