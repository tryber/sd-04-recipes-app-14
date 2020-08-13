import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchDrinkCategory from '../../actions/actionDrinkCategory';
import { fetchSelectedDrink } from '../../actions/actionSelectedDrink';
import { fetchAllDrinks } from '../../actions/actionSelectAllD';
import RenderDrinks from '../RenderCards/RenderDrinks';
import { ChangeRender } from '../../actions/actionChangeRender';
import { fetchMainIngDrink } from '../../service/ingredientApi';

class FilterDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      lastButton: '',
      drinkIng: [],
    };
    this.onClick = this.onClick.bind(this);
    this.buildCard = this.buildCard.bind(this);
    this.buildCardAll = this.buildCardAll.bind(this);
    this.drinkFetched = this.drinkFetched.bind(this);
  }

  componentDidMount() {
    const { fetch } = this.props;
    this.drinkFetched();
    fetch();
  }

  onClick(e) {
    const { lastButton } = this.state;
    const { fetchFiltered, fetchAll, changeRender } = this.props;
    changeRender(true);
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

  drinkFetched() {
    const { fetchAll, ingredient } = this.props;
    if (ingredient === '') {
      return fetchAll();
    }
    return fetchMainIngDrink(ingredient).then((drinkIng) =>
      this.setState((state) => ({ ...state, drinkIng })),
    );
  }

  buildCard() {
    const { drinkSelected } = this.props;
    return drinkSelected.map((drink, index) => (
      <RenderDrinks drink={drink} index={index} />
    ));
  }

  buildCardAll() {
    const { drinkIng } = this.state;
    const { drinkAll, ingredient } = this.props;
    console.log(drinkIng);
    if (ingredient === '') {
      return drinkAll.map((drink, index) => (
        <RenderDrinks drink={drink} index={index} />
      ));
    }
    return drinkIng.map((drink, index) => (
      <RenderDrinks drink={drink} index={index} />
    ));
  }

  render() {
    const { drinkCategories } = this.props;
    const { show } = this.state;
    return (
      <div>
        {drinkCategories.map((item) => (
          <button
            type="button"
            data-testid={`${item.strCategory}-category-filter`}
            value={item.strCategory}
            onClick={(e) => this.onClick(e)}
          >
            {item.strCategory}
          </button>
        ))}
        <button
          type="button"
          data-testid="All-category-filter"
          value="All"
          onClick={this.onClick}
        >
          All
        </button>
        {show ? this.buildCardAll() : this.buildCard()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  drinkCategories: state.drinkCategoryReducer.drinkCategory,
  drinkSelected: state.drinkSelectedReducer.drinkSelected,
  drinkAll: state.drinkAllReducer.drinkAll,
  ingredient: state.ingredientsReducer.drink,
});

const mapDispatchToProps = (dispatch) => ({
  changeRender: (bool) => dispatch(ChangeRender(bool)),
  fetch: () => dispatch(fetchDrinkCategory()),
  fetchFiltered: (drink) => dispatch(fetchSelectedDrink(drink)),
  fetchAll: () => dispatch(fetchAllDrinks()),
});

FilterDrink.propTypes = {
  changeRender: PropTypes.func.isRequired,
  drinkAll: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    }),
  ).isRequired,
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
  ingredient: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  fetchAll: PropTypes.func.isRequired,
  fetchFiltered: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterDrink);
