import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ShareButtonByURL from '../ShareButtonByURL/ShareButtonByURL';

function DoneDrinks(props) {
  const { id, alcoholicOrNot, name, image, doneDate } = props.drink;
  const { index } = props;
  console.log(id, name, image, doneDate);

  return (
    <Link to={`/bebidas/${id}`}>
      <div>
        <img
          data-testid={`${index}-horizontal-image`}
          style={{ height: 200 }}
          src={image}
          alt={name}
        />
        <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
        <h2 data-testid={`${index}-horizontal-name`}>{name}</h2>
        <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
        <ShareButtonByURL
          URL={`http://localhost:3000/bebidas/${id}`}
          dataTestId={`${index}-horizontal-share-btn`}
        />
      </div>
    </Link>
  );
}

DoneDrinks.propTypes = {
  drink: PropTypes.shape({
    alcoholicOrNot: PropTypes.string,
    doneDate: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneDrinks;
