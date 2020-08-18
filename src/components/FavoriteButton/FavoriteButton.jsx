import PropTypes from 'prop-types';
import React from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleStorage = this.handleStorage.bind(this);
    this.handleInicial = this.handleInicial.bind(this);
  }

  componentDidMount() {
    const id = document.URL.slice(30);
    if (!localStorage.favoriteRecipes) localStorage.favoriteRecipes = JSON.stringify([]);
    const storeInicial = JSON.parse(localStorage.favoriteRecipes);
    if (storeInicial.some((e) => e.id === id)) this.handleInicial();
  }

  handleInicial() {
    this.setState({ favorito: true });
  }

  handleClick() {
    const { favorito } = this.state;
    this.setState({ favorito: !favorito });
  }

  handleStorage(id, nome, categoria, area, alcolica, type, src) {
    const { favorito } = this.state;
    const salvar = {
      id,
      type,
      area,
      category: categoria,
      alcoholicOrNot: alcolica,
      name: nome,
      image: src,
    };
    let store = JSON.parse(localStorage.favoriteRecipes);
    if (favorito) {
      store = store.filter((ele) => ele.id !== id);
    } else {
      store = [...store, salvar];
    }
    localStorage.favoriteRecipes = JSON.stringify(store);
  }

  render() {
    const { favorito } = this.state;
    const { id, nome, categoria, area, alcolica, type, src } = this.props;
    return (
      <div>
        <input
          alt="botao-favorito"
          type="image"
          src={favorito ? blackHeartIcon : whiteHeartIcon}
          data-testid="favorite-btn"
          onClick={() => {
            this.handleClick();
            this.handleStorage(id, nome, categoria, area, alcolica, type, src);
          }}
        />
      </div>
    );
  }
}

FavoriteButton.propTypes = {
  alcolica: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoriteButton;
