import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import HeaderDetail from '../components/HeaderDetail/HeaderDetail';
import Instructions from '../components/Instructions/Instructions';
import IngredientCheck from '../components/IngredientList/IngredientCheck';
import { changeDone, changeInprogress } from '../actions/actions';

class FoodInProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      receita: {},
    };
    this.handleInitialState = this.handleInitialState.bind(this);
  }

  componentDidMount() {
    this.handleInitialState();
    this.props.changeInprogress1();
  }

  handleInitialState = () => {
    const { receita } = this.props;
    this.setState({ receita: receita });
  };

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
      const { receita } = this.props;
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
          <button data-testid="finish-recipe-btn">finalizar receita</button>
        </div>
      );
    }
    return null;
  }
}

FoodInProgress.propTypes = {
  changeInprogress1: PropTypes.func.isRequired,
  receita: PropTypes.func.isRequired,
};

const mapDispacthToProps = (dispacht) => ({
  changeDone1: () => dispacht(changeDone()),
  changeInprogress1: () => dispacht(changeInprogress()),
});

export default connect(null, mapDispacthToProps)(FoodInProgress);
