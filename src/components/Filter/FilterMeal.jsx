import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchMealCategory from '../../actions/actionMealCategory';

class FilterMeal extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch()
  }
  render() {
    const { mealCategories } = this.props;
    console.log(mealCategories);
    mealCategories.push({ strCategory: 'All' })
    return (
      <div>
        {mealCategories.map((item) => (
          <button data-testid={ `${item.strCategory}-category-filter` }>{ item.strCategory }</button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mealCategories: state.mealCategoryReducer.mealCategory,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchMealCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterMeal);
