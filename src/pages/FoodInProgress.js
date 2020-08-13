import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import Instructions from '../components/Instructions/Instructions';
import IngredientCheck from '../components/IngredientList/IngredientCheck';
import { changeDone, changeInprogress } from '../actions/actions';

class FoodInProgress extends React.Component {
  static handleInProgress(id) {
    if (!localStorage.inProgressRecipes) localStorage.inProgressRecipes = JSON.stringify({});
    let fInPro = JSON.parse(localStorage.inProgressRecipes);
    const meals = { [id]: [] };
    fInPro = { ...fInPro, meals };
    localStorage.inProgressRecipes = JSON.stringify(fInPro);
  }

  static handleStorage(id, type, area, category, alcoholicOrNot, name, image, doneDate, tags) {
    if (!localStorage.doneRecipes) localStorage.doneRecipes = JSON.stringify([]);
    let storage = JSON.parse(localStorage.doneRecipes);
    const salvar = {
      id,
      type,
      area,
      category,
      alcoholicOrNot,
      name,
      image,
      doneDate,
      tags,
    };
    storage = [...storage, salvar];
    localStorage.doneRecipes = JSON.stringify(storage);
  }

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      receita: {},
      meals: {},
    };
    this.handleInitialState = this.handleInitialState.bind(this);
    // this.handleInProgress = this.handleInProgress.bind(this);
  }

  componentDidMount() {
    this.handleInitialState();
    FoodInProgress.handleInProgress(this.props.receita.idMeal);
    this.props.changeInprogress1();
  }

  handleInitialState() {
    const { receita } = this.props;
    this.setState({ receita });
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
        strTags,
      } = this.state.receita;
      const { receita, botao } = this.props;
      return (
        <div>
          <HeaderDetail
            id={idMeal}
            area={strArea}
            type={'comida'}
            categoria={strCategory}
            src={strMealThumb}
            alcolica={''}
            nome={strMeal}
          />
          <IngredientCheck receita={receita} />
          <Instructions strInstructions={strInstructions} />
          <button
            disabled={!botao}
            data-testid="finish-recipe-btn"
            onClick={() => {
              this.props.changeDone1();
              FoodInProgress.handleStorage(
                idMeal,
                'comida',
                strArea,
                strCategory,
                ' ',
                strMeal,
                strMealThumb,
                new Date(),
                strTags,
              );
            }}
          >
            finalizar receita
          </button>
        </div>
      );
    }
    return null;
  }
}

FoodInProgress.propTypes = {
  botao: PropTypes.bool.isRequired,
  changeDone1: PropTypes.func.isRequired,
  changeInprogress1: PropTypes.func.isRequired,
  receita: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  receita: state.inProgressReducer.receita,
  botao: state.inProgressReducer.button,
});

const mapDispacthToProps = (dispacht) => ({
  changeDone1: () => dispacht(changeDone()),
  changeInprogress1: () => dispacht(changeInprogress()),
});

export default connect(mapStateToProps, mapDispacthToProps)(FoodInProgress);
