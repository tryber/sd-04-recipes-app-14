import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { passRecipe } from '../../actions/actions';

class StartRecipeButton extends React.Component {
  static handleBotao(id) {
    if (localStorage.doneRecipes) {
      const storage = JSON.parse(localStorage.doneRecipes);
      return storage.some((ele) => ele.id === id);
    }
    return false;
  }

  static handleText(id) {
    if (localStorage.inProgressRecipes) {
      let idStorage = '';
      const base = Object.keys(JSON.parse(localStorage.inProgressRecipes));
      if (base[0] === 'meals') {
        idStorage = Object.keys(JSON.parse(localStorage.inProgressRecipes).meals)[0];
      } else idStorage = Object.keys(JSON.parse(localStorage.inProgressRecipes).cocktails)[0];
      return idStorage === id;
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.handleStore = this.handleStore.bind(this);
    // this.handleBotao = this.handleBotao.bind(this);
    // this.handleText = this.handleText.bind(this);
  }

  componentDidMount() {
    this.handleStore();
  }

  handleStore() {
    const { receita } = this.props;
    console.log('receita bebida', receita);
    this.props.passRecipe1(receita);
  }

  render() {
    const FOrD = document.URL.slice(22, 29);
    const idNum = document.URL.slice(30);
    return (
      <Link to={`/${FOrD}/${idNum}/in-progress`}>
        <button
          type="button"
          data-testid="start-recipe-btn"
          style={
            StartRecipeButton.handleBotao(idNum)
              ? { display: 'none' }
              : { position: 'fixed', bottom: 0 }
          }
          onClick={() => this.handleStore()}
        >
          {StartRecipeButton.handleText(idNum) ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>
      </Link>
    );
  }
}

StartRecipeButton.propTypes = {
  passRecipe1: PropTypes.func.isRequired,
  receita: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  passRecipe1: (receita) => dispatch(passRecipe(receita)),
});

const mapStateToProps = (state) => ({
  inProgress: state.inProgressReducer.inprogress,
  // done: state.inProgressReducer.done
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRecipeButton);
