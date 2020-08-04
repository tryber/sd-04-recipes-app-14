import React from 'react';
import ShareButton from '../ShareButton/ShareButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

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
            <ShareButton />
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetail;
