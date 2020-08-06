import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMealCategory } from '../../actions/actionMealCategory';
import { fetchSelectedMeal } from '../../actions/actionSelectedMeal';
import { fetchAllMeal } from '../../actions/actionSelectAllM';
// import { fetchFoodApi } from '../../actions/actions';

class FilterMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: true,
      show: true,
    }
    this.onClick = this.onClick.bind(this);
    this.buildCard = this.buildCard.bind(this);
    this.buildCardAll = this.buildCardAll.bind(this);
  }

  componentDidMount() {
    const { fetch, fetchAll } = this.props;
    fetchAll();
    fetch();
  }

  buildCard() {
    const { mealSelected } = this.props;
    const { toogle } = this.state;
    if (toogle === true) return <div>{this.buildCardAll()}</div>;
    return mealSelected.map((meal, index) => (
      <Link to={`/comidas/${meal.idMeal}`}>
        <div
          data-testid={`${index}-recipe-card`}
          className="foods-card"
          key={meal.idMeal}
        >
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

  onClick(e) {
    const { toogle } = this.state;
    const { fetchFiltered, fetchAll } = this.props;
    this.setState({ toogle: !toogle, show: false });
    if (e.target.value === 'All') {
      console.log('all', fetchAll());
      fetchAll();
      this.buildCardAll();
    } else {
      console.log(`${e.target.value}`, fetchFiltered(e.target.value));
      fetchFiltered(e.target.value);
      this.buildCard();
    }
    return null;
  }

  render() {
    const { mealCategories } = this.props;
    return (
      <div>
        <button
          data-testid={`All-category-filter`}
          value="All"
          onClick={this.onClick}
        >
          All
        </button>
        {mealCategories.map((item, index) => (
          <button
            key={index}
            data-testid={`${item.strCategory}-category-filter`}
            value={item.strCategory}
            onClick={this.onClick}
          >
            {item.strCategory}
          </button>
        ))}
        {this.state.show ? this.buildCardAll() : this.buildCard()}
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterMeal);
