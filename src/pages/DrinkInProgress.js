import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import Instructions from '../components/Instructions/Instructions';
import IngredientCheck from '../components/IngredientList/IngredientCheck';
import { changeDone, changeInprogress } from '../actions/actions';

class DrinkInProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      receita: {},
      drinks: {},
    };
    this.handleInitialState = this.handleInitialState.bind(this);
    this.handleInProgress1 = this.handleInProgress1.bind(this);
  }

  componentDidMount() {
    this.handleInitialState();
    this.handleInProgress1(this.props.receita.idDrink);
    this.props.changeInprogress1();
  }

  handleInitialState = () => {
    const { receita } = this.props;
    this.setState({ receita: receita });
  };

  handleInProgress1 = (id) => {
    if (!localStorage.inProgressRecipes) localStorage.inProgressRecipes = JSON.stringify({});
    let dInPro = JSON.parse(localStorage.inProgressRecipes);
    const cocktails = { [id]: [] };
    dInPro = { ...dInPro, cocktails };
    localStorage.inProgressRecipes = JSON.stringify(dInPro);
  };

  handleStorage1(id, type, area, category, alcoholicOrNot, name, image, doneDate, tags) {
    if (!localStorage.doneRecipes) localStorage.doneRecipes = JSON.stringify([]);
    let storage1 = JSON.parse(localStorage.doneRecipes);
    const salvar1 = {
      id: id,
      type: type,
      area: area,
      category: category,
      alcoholicOrNot: alcoholicOrNot,
      name: name,
      image: image,
      doneDate: doneDate,
      tags: tags,
    };
    storage1 = [...storage1, salvar1];
    localStorage.doneRecipes = JSON.stringify(storage1);
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
            id={idDrink}
            area={''}
            type={'bebida'}
            categoria={strCategory}
            src={strDrinkThumb}
            alcolica={strAlcoholic}
            nome={strDrink}
          />
          <IngredientCheck receita={receita} />
          <Instructions strInstructions={strInstructions} />
          <button
            data-testid="finish-recipe-btn"
            disabled={!botao}
            onClick={() => {
              this.props.changeDone1();
              this.handleStorage(
                idDrink,
                'bebida',
                ' ',
                strCategory,
                strAlcoholic,
                strDrink,
                strDrinkThumb,
                new Date(),
                strTags
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

DrinkInProgress.propTypes = {
  changeInprogress1: PropTypes.func.isRequired,
  receita: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  receita: state.inProgressReducer.receita,
  botao: state.inProgressReducer.button,
})

const mapDispacthToProps = (dispacht) => ({
  changeDone1: () => dispacht(changeDone()),
  changeInprogress1: () => dispacht(changeInprogress()),
});

export default connect(mapStateToProps, mapDispacthToProps)(DrinkInProgress);
