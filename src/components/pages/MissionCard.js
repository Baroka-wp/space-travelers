import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = ({ mission }) => (
  <tr>
    <td>{mission.mission_name}</td>
    <td>{mission.description}</td>
    <td>Not a member</td>
    <td><button type="button">Join Mission</button></td>
  </tr>
);

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default MissionCard;
