import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React from 'react';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import IngredientList from '../components/IngredientList/IngredientList';
import Instructions from '../components/Instructions/Instructions';
import { fetchApiDrinks } from '../actions/actionDrinks';
import { fetchApi } from '../actions/actionFoods';
import Carousel from '../components/Carousel/Carousel';
import StartRecipeButton from '../components/StartRecipeButton/StartRecipeButton';

class DrinkDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      receita: {},
    };
  }

  componentDidMount() {
    const { recDrinksDrink, recFoodsDrink } = this.props;
    const { id } = this.props.match.params;
    this.getRecipe(id);
    recDrinksDrink('', 'nome');
    recFoodsDrink('', 'nome');
  }

  getRecipe(id) {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((response) =>
      response
        .json()
        .then((data) =>
          response.ok
            ? Promise.resolve(this.setState({ receita: data.drinks[0] }))
            : Promise.reject(console.log('erro', data))
        )
    );
  }

  render() {
    if (this.state.receita.idDrink) {
      const {
        strDrinkThumb,
        strCategory,
        idDrink,
        strAlcoholic,
        strInstructions,
        strDrink,
      } = this.state.receita;
      const { receita } = this.state;
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
          <StartRecipeButton receita={receita} />
        </div>
      );
    }
    return null;
  }
}

DrinkDetail.propTypes = {
  loadingDrinks: PropTypes.bool.isRequired,
  loadingFoods: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  recDrinksDrink: PropTypes.func.isRequired,
  recFoodsDrink: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  recFoodsDrink: (a, b) => dispatch(fetchApi(a, b)),
  recDrinksDrink: (a, b) => dispatch(fetchApiDrinks(a, b)),
});

export default connect(null, mapDispatchToProps)(DrinkDetail);
