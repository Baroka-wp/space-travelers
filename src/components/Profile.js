import { useSelector } from 'react-redux';
import ProfileMissionCard from './pages/ProfileMissionCard';
import ProfilRocketCard from './pages/ProfilRocketCard';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);

  return (
    <div className="container my_profil">
      <div className="side_card">
        <h2>My Rockets</h2>
        <ProfilRocketCard myRockets={myRockets} />
      </div>
      <div className="side_card">
        <h2>My Missions</h2>
        <ProfileMissionCard myMissions={myMissions} />
      </div>

    </div>
  );
};

export default Profile;
