import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAreas, fetchFoods, fetchAllFoods } from '../actions/actionFoodByArea';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

class ExploreFoodOrigin extends React.Component {
  componentDidMount() {
    this.props.saveAreas();
    this.props.getFoodByArea('All');
  }

  renderSelect() {
    const { foodByArea } = this.props;
    const { areas } = foodByArea;
    return (
      <select
        data-testid="explore-by-area-dropdown"
        onChange={(event) => {
          this.props.getFoodByArea(event.target.value);
        }}
      >
        <option data-testid="All-option">All</option>
        {areas.map(({ strArea }) => (
          <option key={strArea} data-testid={`${strArea}-option`}>
            {strArea}
          </option>
        ))}
      </select>
    );
  }

  renderCards() {
    const { foodByArea } = this.props;
    const { foods } = foodByArea;
    return (
      <div>
        {foods.map(({ idMeal, strMeal, strMealThumb }, index) => {
          if (index < 12) {
            return (
              <Link to={`/comidas/${idMeal}`}>
                <div key={strMeal} data-testid={`${index}-recipe-card`}>
                  <img
                    src={strMealThumb}
                    data-testid={`${index}-card-img`}
                    alt={`IMG ${strMeal}`}
                  />
                  <p data-testid={`${index}-card-name`}>{strMeal}</p>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
    );
  }

  render() {
    const { search = true, name = 'Explorar Origem', foodByArea } = this.props;
    const { areas, foods } = foodByArea;
    console.log(foodByArea);
    return (
      <div>
        <Header search={search} name={name} />
        {areas.length > 1 ? this.renderSelect() : <p>Loading</p>}
        {foods.length > 1 ? this.renderCards() : <p>LOADING</p>}
        <Footer />
      </div>
    );
  }
}

ExploreFoodOrigin.propTypes = {
  foodByArea: PropTypes.arrayOf(PropTypes.object).isRequired,
  getFoodByArea: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  saveAreas: PropTypes.func.isRequired,
  search: PropTypes.bool.isRequired,
};

const maptStateToProps = (state) => ({
  foodByArea: state.foodByArea,
});

const mapDispatchToProps = (dispatch) => ({
  saveAreas: () => dispatch(fetchAreas()),
  getFoodByArea: (area) => {
    if (area === 'All') {
      return dispatch(fetchAllFoods());
    }
    return dispatch(fetchFoods(area));
  },
});

export default connect(maptStateToProps, mapDispatchToProps)(ExploreFoodOrigin);
