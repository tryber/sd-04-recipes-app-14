import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMealCategory } from '../../actions/actionMealCategory';
import { fetchSelectedMeal } from '../../actions/actionSelectedMeal';
import { fetchAllMeal } from '../../actions/actionSelectAllM';

class FilterMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: true,
      lastMeal: '',
    };
    this.onClick = this.onClick.bind(this);
    this.buildCard = this.buildCard.bind(this);
    this.buildCardAll = this.buildCardAll.bind(this);
  }

  componentDidMount() {
    const { fetch, fetchAll } = this.props;
    fetchAll();
    fetch();
  }

  onClick(e) {
    const { lastMeal } = this.state;
    const { fetchFiltered, fetchAll } = this.props;
    this.setState({ lastMeal: e.target.value });
    if (e.target.value === lastMeal) {
      this.setState({ show: true, lastMeal: '' });
    } else if (e.target.value === 'All') {
      this.setState({ toogle: true });
      fetchAll();
    } else {
      this.setState({ toogle: false });
      fetchFiltered(e.target.value);
    }
    return null;
  }

  buildCard() {
    const { mealSelected } = this.props;
    return mealSelected.map((meal, index) => (
      <Link to={`/comidas/${meal.idMeal}`}>
        <div data-testid={`${index}-recipe-card`} className="foods-card" key={meal.idMeal}>
          <img
            className="picture-cards-food"
            data-testid={`${index}-card-img`}
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <p data-testid={`${index}-card-name`}>{meal.strMeal}</p>
        </div>
      </Link>
    ));
  }

  buildCardAll() {
    const { mealAll } = this.props;
    return mealAll.map((meal, index) => (
      <Link to={`/comidas/${meal.idMeal}`}>
        <div data-testid={`${index}-recipe-card`} className="foods-card" key={meal.idMeal}>
          <img
            className="picture-cards-food"
            data-testid={`${index}-card-img`}
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
          <p data-testid={`${index}-card-name`}>{meal.strMeal}</p>
        </div>
      </Link>
    ));
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
        {this.state.toogle ? this.buildCardAll() : this.buildCard()}
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
  fetchFiltered: (meal) => dispatch(fetchSelectedMeal(meal)),
  fetchAll: () => dispatch(fetchAllMeal()),
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
  fetchAll: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMeal);
