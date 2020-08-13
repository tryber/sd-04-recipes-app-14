import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import IngredientList from '../components/IngredientList/IngredientList';
import Instructions from '../components/Instructions/Instructions';
import { fetchApiDrinks } from '../actions/actionDrinks';
import { fetchApi } from '../actions/actionFoods';
import Carousel from '../components/Carousel/Carousel';
import StartRecipeButton from '../components/StartRecipeButton/StartRecipeButton';

class FoodDetail extends React.Component {
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
    recDrinks('', 'nome');
    recFoods('', 'nome');
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
        strArea,
        strMealThumb,
        strCategory,
        strInstructions,
        strMeal,
        strYoutube,
      } = this.state.receita;
      const url = strYoutube.slice(32);
      const { receita } = this.state;
      return (
        <div>
          <HeaderDetail
            id={idMeal}
            area={strArea}
            type="comida"
            categoria={strCategory}
            src={strMealThumb}
            alcolica={''}
            nome={strMeal}
          />
          <IngredientList receita={receita} />
          <Instructions strInstructions={strInstructions} />
          <iframe
            src={`https://www.youtube.com/embed/${url}`}
            title={strMeal}
            data-testid="video"
          />
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

FoodDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  recDrinks: PropTypes.func.isRequired,
  recFoods: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  recFoods: (a, b) => dispatch(fetchApi(a, b)),
  recDrinks: (a, b) => dispatch(fetchApiDrinks(a, b)),
});

export default connect(null, mapDispatchToProps)(FoodDetail);
