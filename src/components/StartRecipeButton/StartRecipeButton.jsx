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
    console.log('store',JSON.parse(localStorage.inProgressRecipes))
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

  // handleText(id) {
  //   if (localStorage.inProgressRecipes) {
  //     const tex = JSON.parse(localStorage.inProgressRecipes)
  //     return tex
  //   }
  // }
  render() {
    const { inProgress } = this.props;
    const FOrD = document.URL.slice(22, 29);
    const idNum = document.URL.slice(30);
    return (
      <Link to={`/${FOrD}/${idNum}/in-progress`}>
        <input
          // disabled={this.handleBotao(idNum)}
          type="button"
          data-testid="start-recipe-btn"
          style={this.handleBotao(idNum) ? { display: 'none' } : { position: 'fixed', bottom: 0 }}
          value={inProgress ? 'Continuar Receita' : 'Iniciar Receita'}
          onClick={() => this.handleStore()}
        />
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
