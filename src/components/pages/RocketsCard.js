import React from 'react';
import PropTypes from 'prop-types';

const RocketsCard = ({ rocket }) => (
  <div>
    <img src={rocket.flickr_images} alt={rocket.rocket_name + rocket.id} />
    <div>
      <h3>{rocket.rocket_name}</h3>
      <p>{rocket.description}</p>
      <button type="button">Reserve Rockets</button>
    </div>
  </div>
);

RocketsCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default RocketsCard;
