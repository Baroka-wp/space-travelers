import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleReservation } from '../../redux/rockets/rocketsReducer';

const RocketsCard = ({ rocket }) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket_card dflex">
      <img src={rocket.flickr_images} alt={rocket.rocket_name + rocket.id} />
      <div className="rocket_details">
        <h3>{rocket.rocket_name}</h3>
        <p>
          {rocket.reserved && (<span className="reserve_badge">Reserved</span>)}
          {rocket.description}
        </p>

        {(rocket.reserved
          ? <button type="button" className="cancel_btn" onClick={() => dispatch(toggleReservation(rocket.id))}>Cancel Reservation</button>
          : <button type="button" className="reserve_btn" onClick={() => dispatch(toggleReservation(rocket.id))}>Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

RocketsCard.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.string,
  }).isRequired,
};

export default RocketsCard;
