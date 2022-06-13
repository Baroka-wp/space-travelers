import React from 'react';
import PropTypes from 'prop-types';

const ProfileMissionCard = ({ myMissions }) => (
  <table>
    <tbody>
      {
        myMissions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

ProfileMissionCard.propTypes = {
  myMissions: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default ProfileMissionCard;
