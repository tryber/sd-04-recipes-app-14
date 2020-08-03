import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchDrinkCategory from '../../actions/actionDrinkCategory';

class FilterDrink extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch()
  }
  render() {
    const { drinkCategories } = this.props;
    console.log(drinkCategories);
    drinkCategories.push({ strCategory: 'All' })
    return (
      <div>
        {drinkCategories.map((item) => (
          <button data-testid={ `${item.strCategory}-category-filter` }>{ item.strCategory }</button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCategories: state.drinkCategoryReducer.drinkCategory,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchDrinkCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrink);
