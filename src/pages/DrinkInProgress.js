import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import Instructions from '../components/Instructions/Instructions';
import IngredientCheck from '../components/IngredientList/IngredientCheck';
import { changeDone, changeInprogress } from '../actions/actions';

class DrinkInProgress extends React.Component {
  static handleInProgress1(id) {
    if (!localStorage.inProgressRecipes) localStorage.inProgressRecipes = JSON.stringify({});
    let dInPro = JSON.parse(localStorage.inProgressRecipes);
    const cocktails = { [id]: [] };
    dInPro = { ...dInPro, cocktails };
    return (localStorage.inProgressRecipes = JSON.stringify(dInPro));
  }

  static handleStorage1(id, type, area, category, alcoholicOrNot, name, image, doneDate, tags) {
    if (!localStorage.doneRecipes) localStorage.doneRecipes = JSON.stringify([]);
    let storage1 = JSON.parse(localStorage.doneRecipes);
    const salvar1 = {
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
    storage1 = [...storage1, salvar1];
    localStorage.doneRecipes = JSON.stringify(storage1);
  }

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      receita: {},
      drinks: {},
    };
    this.handleInitialState = this.handleInitialState.bind(this);
    // this.handleInProgress1 = this.handleInProgress1.bind(this);
  }

  componentDidMount() {
    const idNu = this.props.match.params.id;
    this.handleInitialState(idNu);
    DrinkInProgress.handleInProgress1(idNu);
    this.props.changeInprogress1();
  }

  handleInitialState(id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response1) => response1.json())
      .then((data) => this.setState({ receita: data.drinks[0] }));
  }

  render() {
    if (this.state.receita.idDrink) {
      const {
        strDrinkThumb, strCategory, idDrink, strAlcoholic,
        strInstructions, strDrink, strTags,
      } = this.state.receita;
      const { botao } = this.props;
      return (
        <div>
          <HeaderDetail
            id={idDrink}
            area={''}
            type={'bebida'}
            nome={strDrink}
            categoria={strCategory}
            src={strDrinkThumb}
            alcolica={strAlcoholic}
          />
          <IngredientCheck receita={this.state.receita} />
          <Instructions strInstructions={strInstructions} />
          <button
            data-testid="finish-recipe-btn"
            disabled={!botao}
            onClick={() => {
              this.props.changeDone1();
              DrinkInProgress.handleStorage1(
                idDrink,
                'bebida',
                ' ',
                strCategory,
                strAlcoholic,
                strDrink,
                strDrinkThumb,
                new Date(),
                strTags,
              );
            }}
          >finalizar receita
          </button>
        </div>
      );
    }
    return null;
  }
}

DrinkInProgress.propTypes = {
  botao: PropTypes.bool.isRequired,
  changeDone1: PropTypes.func.isRequired,
  changeInprogress1: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  // receita: state.inProgressReducer.receita,
  botao: state.inProgressReducer.button,
});

const mapDispacthToProps = (dispacht) => ({
  changeDone1: () => dispacht(changeDone()),
  changeInprogress1: () => dispacht(changeInprogress()),
});

export default connect(mapStateToProps, mapDispacthToProps)(DrinkInProgress);
