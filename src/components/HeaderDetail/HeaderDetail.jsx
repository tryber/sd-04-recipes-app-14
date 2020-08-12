import PropTypes from 'prop-types';
import React from 'react';
import ShareButton from '../ShareButton/ShareButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

const HeaderDetail = (props) => {
  const { src, nome, categoria, id, type, area, alcolica } = props;
  return (
    <div>
      <div>
        <div>
          <img data-testid="recipe-photo" src={src} alt="foto da receita" />
        </div>
        <div>
          <div>
            <h2 data-testid="recipe-title">{nome}</h2>
            <span data-testid="recipe-category">{ type === 'comida' ? categoria : alcolica }</span>
          </div>
          <div>
            <ShareButton />
            <FavoriteButton
              id={id}
              area={area}
              type={type}
              categoria={categoria}
              src={src}
              alcolica={alcolica}
              nome={nome}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderDetail.propTypes = {
  alcolica: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default HeaderDetail;
