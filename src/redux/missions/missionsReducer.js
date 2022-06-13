import axios from 'axios';

const GET_MISSIONS = 'space-travelers/redux/GET_MISSIONS';
const url = 'https://api.spacexdata.com/v3/missions';

const getMissions = (payload) => ({ type: GET_MISSIONS, payload });

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const missions = [];

  data.forEach((mission) => {
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  dispatch(getMissions(missions));
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
