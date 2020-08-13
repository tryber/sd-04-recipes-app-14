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
    this.handleInitialState();
    DrinkInProgress.handleInProgress1(this.props.receita.idDrink);
    this.props.changeInprogress1();
  }

  handleInitialState() {
    const { receita } = this.props;
    this.setState({ receita });
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
        strTags,
      } = this.state.receita;
      const { receita, botao } = this.props;
      return (
        <div>
          <HeaderDetail
            id={idDrink} area={''} type={'bebida'} nome={strDrink}
            categoria={strCategory} src={strDrinkThumb} alcolica={strAlcoholic}
          />
          <IngredientCheck receita={receita} />
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
  receita: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  receita: state.inProgressReducer.receita,
  botao: state.inProgressReducer.button,
});

const mapDispacthToProps = (dispacht) => ({
  changeDone1: () => dispacht(changeDone()),
  changeInprogress1: () => dispacht(changeInprogress()),
});

export default connect(mapStateToProps, mapDispacthToProps)(DrinkInProgress);
