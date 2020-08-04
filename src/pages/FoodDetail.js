import React from 'react';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import IngredientList from '../components/IngredientList/IngredientList';

class FoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receita: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getRecipe(id);
  }

  getRecipe(id) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ receita: data.meals[0] }));
  }

  render() {
    if (this.state.receita.idMeal) {
      const {
        idMeal,
        strMealThumb,
        strCategory,
        strInstructions,
        strMeal,
        strYoutube,
      } = this.state.receita;
      let url = strYoutube.slice(32);
      const receita = this.state;
      return (
        <div>
          <HeaderDetail src={strMealThumb} nomeReceita={strMeal} categoriaReceita={strCategory} />
          <IngredientList receita={receita} />
          <div>
            <h3>Instruções</h3>
            <span data-testid="instructions">{strInstructions}</span>
          </div>
          <iframe
            src={`https://www.youtube.com/embed/${url}`}
            title={strMeal}
            data-testid="video"
          />
          <div data-testid="${index}-recomendation-card">
            <h2>receitas recomendadas</h2>
          </div>
          <button data-testid="start-recipe-btn">Iniciar receita</button>
        </div>
      );
    }
    return null;
  }
}

export default FoodDetail;
