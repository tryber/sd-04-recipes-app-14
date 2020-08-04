import React from 'react';
import { Player } from 'video-react';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';

class FoodDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receita: {},
    };
  }

  componentDidMount() {
    console.log('params', this.props.match.params.id);
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
      console.log('coki', document.cookie);
      const {
        idMeal,
        strMealThumb,
        strCategory,
        strInstructions,
        strMeal,
        strYoutube,
      } = this.state.receita;
      let url = strYoutube.slice(32);
      return (
        <div>
          {console.log('re', this.state.receita)}
          {console.log('you', strYoutube)}
          <HeaderDetail src={strMealThumb} nomeReceita={strMeal} categoriaReceita={strCategory} />
          <div data-testid="${index}-ingredient-name-and-measure">
            <h3>Ingredientes</h3>
            <ul></ul>
          </div>
          <div data-testid="instructions">
            <h3>Instrucoe</h3>
            <span>{strInstructions}</span>
          </div>
<iframe src={`https://www.youtube.com/embed/${url}`} title={strMeal} data-testid="video" />
          {console.log('url', url)}
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
