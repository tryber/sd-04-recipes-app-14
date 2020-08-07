import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import IngredientList from '../components/IngredientList/IngredientList';
import Instructions from '../components/Instructions/Instructions';
import { fetchApi } from '../actions/actionFoods';
import Carousel from '../components/Carousel/Carousel';
import { fetchApiDrinks } from '../actions/actionDrinks';

class DrinkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receita: {},
    };
  }

  componentDidMount() {
    const { recFoods, recDrinks } = this.props;
    const { id } = this.props.match.params;
    this.getRecipe(id);
    recFoods('', 'nome');
    recDrinks('', 'nome');
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
          <Instructions strInstructions={strInstructions} />
          <div>
            <Carousel />
          </div>
          <button
            type="button"
            data-testid="start-recipe-btn"
            style={{ position: 'fixed', bottom: 0 }}
          >
            Iniciar receita
          </button>
        </div>
      );
    }
    return null;
  }
}

DrinkDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  recFoods: (a, b) => dispatch(fetchApi(a, b)),
  recDrinks: (a, b) => dispatch(fetchApiDrinks(a, b)),
});

export default connect(null, mapDispatchToProps)(DrinkDetail);
