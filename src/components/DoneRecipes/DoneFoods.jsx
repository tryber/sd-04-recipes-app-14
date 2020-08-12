import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function DoneFoods(props) {
  const { id, area, category, name, image, doneDate, tags } = props.food;
  const { index } = props;
  console.log(id, area, category, name, image, doneDate, tags);
  return (
    <Link to={`/comidas/${id}`}>
      <div>
        <img
          data-testid={`${index}-horizontal-image`}
          style={{ height: 150 }}
          src={image}
          alt={name}
        />
        <p data-testid={`${index}-horizontal-top-text`}>{`${area} - ${category}`}</p>
        <h2 data-testid={`${index}-horizontal-name`}>{name}</h2>
        <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
        {tags.map((e) => (
          <p data-testid={`${index}-${e}-horizontal-tag`}>{e}</p>
        ))}
        <p data-testid={`${index}-horizontal-share-btn`}>BOTÃO DE COMPARTILHAR!!</p>
      </div>
    </Link>
  );
}

DoneFoods.propTypes = {
  food: PropTypes.shape({
    area: PropTypes.string,
    category: PropTypes.string,
    doneDate: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneFoods;
