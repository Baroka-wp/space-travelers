import React from 'react';
import PropTypes from 'prop-types';

const ProfilRocketCard = ({ myRockets }) => (
  <table className="profil_Table">
    <tbody>
      {
        myRockets.map((rocket) => (
          <tr key={rocket.id}>
            <td>
              {rocket.rocket_name}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

ProfilRocketCard.propTypes = {
  myRockets: PropTypes
    .arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
};

export default ProfilRocketCard;
