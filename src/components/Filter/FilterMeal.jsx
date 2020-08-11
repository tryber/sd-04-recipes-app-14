import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchMealCategory } from '../../actions/actionMealCategory';
import { fetchSelectedMeal } from '../../actions/actionSelectedMeal';
import RenderFoods from '../RenderCards/RenderFoods';
import { fetchAllMeal } from '../../actions/actionSelectAllM';
import { ChangeRender } from '../../actions/actionChangeRender';

class FilterMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      lastMeal: '',
    };
    this.onClick = this.onClick.bind(this);
    this.buildCard = this.buildCard.bind(this);
    this.buildCardAll = this.buildCardAll.bind(this);
  }

  componentDidMount() {
    const { fetch, fetchAll } = this.props;
    fetch();
    fetchAll();
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

  buildCard() {
    const { mealSelected } = this.props;
    return mealSelected.map((foods, index) => <RenderFoods foods={foods} index={index} />);
  }

  buildCardAll() {
    const { mealAll } = this.props;
    return mealAll.map((meal, index) => <RenderFoods foods={meal} index={index} />);
  }

  render() {
    const { mealCategories } = this.props;
    return (
      <div>
        <button type="button" data-testid="All-category-filter" value="All" onClick={this.onClick}>
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
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchMealCategory()),
  fetchAll: () => dispatch(fetchAllMeal()),
  fetchFiltered: (meal) => dispatch(fetchSelectedMeal(meal)),
  changeRender: (bool) => dispatch(ChangeRender(bool)),
});

FilterMeal.propTypes = {
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
  mealAll: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.string,
      strMeal: PropTypes.string,
      strMealThumb: PropTypes.string,
    }),
  ).isRequired,
  fetch: PropTypes.func.isRequired,
  fetchFiltered: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMeal);
