import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchMealCategory from '../../actions/actionMealCategory';
import { getMealFiltered } from '../../service/categoryApi';

class FilterMeal extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    const { fetch } = this.props;
    fetch()
  }

  onClick(e) {
    getMealFiltered(e.target.value);
    console.log(getMealFiltered(e.target.value));
  }

  render() {
    const { mealCategories } = this.props;
    console.log(mealCategories);
    mealCategories.push({ strCategory: 'All' })
    return (
      <div>
        {mealCategories.map((item) => (
          <button data-testid={ `${item.strCategory}-category-filter` } value={item.strCategory} onClick={this.onClick}>{ item.strCategory }</button>
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
