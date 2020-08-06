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
  }
  componentDidMount() {
    const id = document.URL.slice(30);
    console.log(id);
    console.log('match', this.props);
    if (!localStorage.favoriteRecipes) localStorage.favoriteRecipes = JSON.stringify([]);
    let storeInicial = JSON.parse(localStorage.favoriteRecipes);
    if (storeInicial.some((e) => e.id === id)) this.setState({ favorito: true });
  }

  handleClick() {
    const favorito = this.state.favorito;
    this.setState({ favorito: !favorito });
  }

  handleStorage(id, nome, categoria, area, alcolica, type, src) {
    const { favorito } = this.state;
    const salvar = {
      id: id,
      type: type,
      area: area,
      category: categoria,
      alcoholicOrNot: alcolica,
      name: nome,
      image: src,
    };
    let store = JSON.parse(localStorage.favoriteRecipes);
    favorito ? (store = store.filter((ele) => ele.id !== id)) : (store = [...store, salvar]);
    localStorage.favoriteRecipes = JSON.stringify(store);
  }

  render() {
    const f = this.state.favorito;
    const { id, nome, categoria, area, alcolica, type, src } = this.props;
    return (
      <div>
        <input
          alt="botao-favorito"
          type="image"
          src={f ? blackHeartIcon : whiteHeartIcon}
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

export default FavoriteButton;
