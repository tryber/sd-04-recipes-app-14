import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import ShareButtonByURL from '../components/ShareButtonByURL/ShareButtonByURL';
import UnfavoriteButton from '../components/UnfavoriteButton/UnfavoriteButton';

class FavoriteRecipes extends React.Component {
  static redirect() {}

  constructor(props) {
    super(props);
    this.state = { data: [], filteredData: [], filter: false };
    this.setData = this.setData.bind(this);
    this.filter = this.filter.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    this.setData();
    window.onstorage = () => {};
  }

  setData() {
    const favoriteRecipes = JSON.parse(localStorage.favoriteRecipes);
    this.setState({ data: favoriteRecipes, filter: false });
  }

  filter(foodOrDrink) {
    this.setState({ filter: true });
    const { data } = this.state;
    if (foodOrDrink !== 'todos') {
      const filter = data.filter(({ type }) => type === foodOrDrink);
      this.setState({ filteredData: filter });
    } else {
      this.setData();
    }
  }

  renderButtons() {
    return (
      <div>
        <button type="button" data-testid="filter-by-all-btn" onClick={() => this.filter('todos')}>
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={() => this.filter('comida')}
        >
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={() => this.filter('bebida')}
        >
          Drinks
        </button>
      </div>
    );
  }

  render() {
    const { data, filteredData, filter } = this.state;
    return (
      <div>
        <Header name="Receitas Favoritas" />
        {this.renderButtons()}
        {(filter ? filteredData : data).map(
          ({ name, image, id, type, area, category, alcoholicOrNot }, index) => (
            <div>
              <p data-testid={`${index}-horizontal-top-text`}>
                {type === 'comida' ? `${area} - ${category}` : `${alcoholicOrNot}`}
              </p>
              <Link to={type === 'comida' ? `/comidas/${id}` : `/bebidas/${id}`}>
                <h3 data-testid={`${index}-horizontal-name`}>{name}</h3>
                <input
                  type="image"
                  src={image}
                  alt={`${name} img`}
                  data-testid={`${index}-horizontal-image`}
                  style={{ height: '300px', width: '200px' }}
                />
              </Link>
              <ShareButtonByURL
                URL={`${
                  type === 'comida'
                    ? `http://localhost:3000/comidas/${id}`
                    : `http://localhost:3000/bebidas/${id}`
                }`}
                dataTestId={`${index}-horizontal-share-btn`}
              />
              <UnfavoriteButton
                idRecipe={id}
                dataTestId={`${index}-horizontal-favorite-btn`}
                setData={this.setData}
              />
            </div>
          ),
        )}
      </div>
    );
  }
}

export default FavoriteRecipes;
