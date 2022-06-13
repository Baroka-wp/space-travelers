import { useSelector } from 'react-redux';
import ProfilRocketCard from './pages/ProfilRocketCard';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <h2>My Rockets</h2>
      <ProfilRocketCard myRockets={myRockets} />
      <h2>My Missions</h2>
    </div>

  );
};

export default Profile;
