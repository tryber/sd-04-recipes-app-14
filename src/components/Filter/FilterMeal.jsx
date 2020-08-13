import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealCategory } from '../../actions/actionMealCategory';
import { fetchSelectedMeal } from '../../actions/actionSelectedMeal';
import RenderFoods from '../RenderCards/RenderFoods';
import { fetchAllMeal } from '../../actions/actionSelectAllM';
import { ChangeRender } from '../../actions/actionChangeRender';
import { fetchMainIngMeal } from '../../service/ingredientApi';

class FilterMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      lastMeal: '',
      mealIng: [],
    };
    this.onClick = this.onClick.bind(this);
    this.buildCard = this.buildCard.bind(this);
    this.buildCardAll = this.buildCardAll.bind(this);
    this.mealFetched = this.mealFetched.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    this.mealFetched();
    fetch();
  }

  onClick(e) {
    const { lastMeal } = this.state;
    const { fetchFiltered, fetchAll, changeRender } = this.props;
    changeRender(true);
    this.setState({ lastMeal: e.target.value });
    if (e.target.value === lastMeal) {
      this.setState({ toggle: true, lastMeal: '' });
    } else if (e.target.value === 'All') {
      this.setState({ toggle: true });
      fetchAll();
    } else {
      this.setState({ toggle: false });
      fetchFiltered(e.target.value);
    }
    return null;
  }

  mealFetched() {
    const { fetchAll, ingredient } = this.props;
    if (ingredient === '') {
      return fetchAll();
    }
    return fetchMainIngMeal(ingredient).then((mealIng) =>
      this.setState((state) => ({ ...state, mealIng })),
    );
  }

  buildCard() {
    const { mealSelected } = this.props;
    return mealSelected.map((foods, index) => (
      <RenderFoods foods={foods} index={index} />
    ));
  }

  buildCardAll() {
    const { mealIng } = this.state;
    const { mealAll, ingredient } = this.props;
    console.log(ingredient);
    if (ingredient === '') {
      return mealAll.map((meal, index) => (
        <RenderFoods foods={meal} index={index} />
      ));
    }
    return mealIng.map((meal, index) => (
      <RenderFoods foods={meal} index={index} />
    ));
  }

  render() {
    const { mealCategories } = this.props;
    return (
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          value="All"
          onClick={this.onClick}
        >
          All
        </button>
        {mealCategories.map((item) => (
          <button
            type="button"
            key={item.strCategory}
            data-testid={`${item.strCategory}-category-filter`}
            value={item.strCategory}
            onClick={this.onClick}
          >
            {item.strCategory}
          </button>
        ))}
        {this.state.toggle ? this.buildCardAll() : this.buildCard()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mealCategories: state.mealCategoryReducer.mealCategory,
  mealSelected: state.mealSelectedReducer.mealSelected,
  mealAll: state.mealAllReducer.mealAll,
  ingredient: state.ingredientsReducer.food,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchMealCategory()),
  fetchAll: () => dispatch(fetchAllMeal()),
  fetchFiltered: (meal) => dispatch(fetchSelectedMeal(meal)),
  changeRender: (bool) => dispatch(ChangeRender(bool)),
});

FilterMeal.propTypes = {
  changeRender: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired,
  fetchAll: PropTypes.func.isRequired,
  fetchFiltered: PropTypes.func.isRequired,
  ingredient: PropTypes.string.isRequired,
  mealAll: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    }),
  ).isRequired,
  mealCategories: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string,
    }),
  ).isRequired,
  mealSelected: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMeal);
