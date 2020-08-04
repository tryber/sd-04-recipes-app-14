import React from 'react';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorito: false,
      src: whiteHeartIcon,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const favorito = this.state.favorito;
    this.setState({ favorito: !favorito });
  }

  render() {
    const f = this.state.favorito;
    return (
      <div>
        <input
          alt="botao-favorito"
          type="image"
          src={f ? blackHeartIcon : whiteHeartIcon}
          onClick={() => this.handleClick()}
          data-testid="favorite-btn"
        />
      </div>
    );
  }
}

export default FavoriteButton;
