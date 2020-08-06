import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchDrinkCategory from '../../actions/actionDrinkCategory';
import { fetchSelectedDrink } from '../../actions/actionSelectedDrink';
import { fetchAllDrinks } from '../../actions/actionSelectAllD';

class FilterDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      lastButton: '',
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

  buildCard() {
    const { drinkSelected } = this.props;
    return drinkSelected.map((drink, index) => (
      <Link to={`/bebidas/${drink.idDrink}`}>
        <div data-testid={`${index}-recipe-card`} className="foods-card" key={drink.idDrink}>
          <img
            className="picture-cards-food"
            data-testid={`${index}-card-img`}
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <p data-testid={`${index}-card-name`}>{drink.strDrink}</p>
        </div>
      </Link>
    ));
  }

  buildCardAll() {
    const { drinkAll } = this.props;
    return drinkAll.map((drink, index) => (
      <Link to={`/bebidas/${drink.idDrink}`}>
        <div data-testid={`${index}-recipe-card`} className="foods-card" key={drink.idDrink}>
          <img
            className="picture-cards-food"
            data-testid={`${index}-card-img`}
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <p data-testid={`${index}-card-name`}>{drink.strDrink}</p>
        </div>
      </Link>
    ));
  }

  onClick(e) {
    const { lastButton } = this.state;
    const { fetchFiltered, fetchAll } = this.props;
    this.setState({ lastButton: e.target.value });
    if (e.target.value === lastButton) {
      this.setState({ show: true, lastButton: '' });
    } else if (e.target.value === 'All') {
      this.setState({ show: true });
      fetchAll();
    } else {
      this.setState({ show: false });
      fetchFiltered(e.target.value);
    }
    return null;
  }

  render() {
    const { drinkCategories } = this.props;
    console.log('show', this.state.show);
    return (
      <div>
        {drinkCategories.map((item) => (
          <button
            data-testid={`${item.strCategory}-category-filter`}
            value={item.strCategory}
            onClick={(e) => this.onClick(e)}
          >
            {item.strCategory}
          </button>
        ))}
        <button data-testid={`All-category-filter`} value="All" onClick={this.onClick}>
          All
        </button>
        {this.state.show ? this.buildCardAll() : this.buildCard()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCategories: state.drinkCategoryReducer.drinkCategory,
  drinkSelected: state.drinkSelectedReducer.drinkSelected,
  drinkAll: state.drinkAllReducer.drinkAll,
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchDrinkCategory()),
  fetchFiltered: (drink) => dispatch(fetchSelectedDrink(drink)),
  fetchAll: () => dispatch(fetchAllDrinks()),
});

FilterDrink.propTypes = {
  drinkCategories: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string,
    }),
  ).isRequired,
  drinkSelected: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    }),
  ).isRequired,
  drinkAll: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    }),
  ).isRequired,
  fetch: PropTypes.func.isRequired,
  fetchFiltered: PropTypes.func.isRequired,
  fetchAll: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrink);
