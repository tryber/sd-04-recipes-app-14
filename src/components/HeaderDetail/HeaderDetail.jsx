import React from 'react';
import BlackHeartIcon from '../../images/blackHeartIcon.svg';
import ShareIcon from '../../images/shareIcon.svg';

const HeaderDetail = (props) => {
  const { src, nomeReceita, categoriaReceita } = props;
  return (
    <div>
      <div>
        <div>
          <img data-testid="recipe-photo" src={src} alt="foto da receita" />
        </div>
        <div>
          <div>
            <h2 data-testid="recipe-title">{nomeReceita}</h2>
            <span data-testid="recipe-category">{categoriaReceita}</span>
          </div>
          <div>
            <img src={ShareIcon} data-testid="share-btn" alt="botao de compartilhar" />
            <img src={BlackHeartIcon} data-testid="favorite-btn" alt="botao de curtir" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
