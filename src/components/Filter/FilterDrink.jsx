import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchDrinkCategory from '../../actions/actionDrinkCategory';
import { fetchSelectedDrink } from '../../actions/actionSelectedDrink';
import { fetchAllDrinks } from '../../actions/actionSelectAllD';

class FilterDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toogle: true,
      show: true,
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
    const { toogle } = this.state;
    if (toogle === true) return <div>{this.buildCardAll()}</div>;
    return drinkSelected.map((drink, index) => (
      <Link to={`/bebidas/${drink.idDrink}`}>
        <div
          data-testid={`${index}-recipe-card`}
          className="foods-card"
          key={drink.idDrink}
        >
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
    // const { toogle } = this.state;
    // if (toogle === true) return <div>{this.build}</div>;
    return drinkAll.map((drink, index) => (
      <Link to={`/bebidas/${drink.idDrink}`}>
        <div
          data-testid={`${index}-recipe-card`}
          className="foods-card"
          key={drink.idDrink}
        >
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
    const { drinkCategories } = this.props;
    return (
      <div>
        {drinkCategories.map((item) => (
          <button
            data-testid={`${item.strCategory}-category-filter`}
            value={item.strCategory}
            onClick={this.onClick}
          >
            {item.strCategory}
          </button>
        ))}
        <button
          data-testid={`All-category-filter`}
          value="All"
          onClick={this.onClick}
        >
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrink);
