import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { passRecipe } from '../../actions/actions';

class StartRecipeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleStore = this.handleStore.bind(this);
    this.handleBotao = this.handleBotao.bind(this);
  }
  componentDidMount() {
    this.handleStore();
    // console.log('store',JSON.parse(localStorage.inProgressRecipes))
  }

  handleStore() {
    const { receita } = this.props;
    console.log('receita bebida', receita);
    this.props.passRecipe1(receita);
  }
  handleBotao(id) {
    if (localStorage.doneRecipes) {
      const storage = JSON.parse(localStorage.doneRecipes);
      return storage.some((ele) => ele.id === id);
    }
    return false;
  }

  handleText(id) {
    if (localStorage.inProgressRecipes) {
      let idStorage = '';
      const base = Object.keys(JSON.parse(localStorage.inProgressRecipes));
      base[0] === 'meals'
        ? (idStorage = Object.keys(JSON.parse(localStorage.inProgressRecipes).meals)[0])
        : (idStorage = Object.keys(JSON.parse(localStorage.inProgressRecipes).cocktails)[0]);
      return idStorage === id ? true : false;
    }
    return false;
  }

  render() {
    const { inProgress } = this.props;
    const FOrD = document.URL.slice(22, 29);
    const idNum = document.URL.slice(30);
    return (
      <Link to={`/${FOrD}/${idNum}/in-progress`}>
        <button
          type="button"
          data-testid="start-recipe-btn"
          style={this.handleBotao(idNum) ? { display: 'none' } : { position: 'fixed', bottom: 0 }}
          // value={this.handleText(idNum) ? 'Continuar Receita' : 'Iniciar Receita'}
          onClick={() => this.handleStore()}
        >{this.handleText(idNum) ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>
      </Link>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  passRecipe1: (receita) => dispatch(passRecipe(receita)),
});

const mapStateToProps = (state) => ({
  inProgress: state.inProgressReducer.inprogress,
  // done: state.inProgressReducer.done
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRecipeButton);
