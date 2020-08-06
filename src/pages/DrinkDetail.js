import React from 'react';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import IngredientList from '../components/IngredientList/IngredientList';

class DrinkDetail extends React.Component {
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
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => this.setState({ receita: data.drinks[0] }));
  }

  render() {
    if (this.state.receita.idDrink) {
      const { receita } = this.state;
      const {
        strDrinkThumb,
        strCategory,
        idDrink,
        strAlcoholic,
        strInstructions,
        strDrink,
      } = this.state.receita;
      return (
        <div>
          <HeaderDetail
            id={idDrink}
            area={''}
            type={'bebida'}
            categoria={strCategory}
            src={strDrinkThumb}
            alcolica={strAlcoholic}
            nome={strDrink}
          />
          <IngredientList receita={receita} />
          <div>
            <h3>Instruções</h3>
            <span data-testid="instructions">{strInstructions}</span>
          </div>
          <div>
            <h2>receitas recomendadas</h2>
          </div>
          <button data-testid="start-recipe-btn" style={{ position: 'fixed', bottom: 0 }}>
            Iniciar receita
          </button>
        </div>
      );
    }
    return null;
  }
}
export default DrinkDetail;
