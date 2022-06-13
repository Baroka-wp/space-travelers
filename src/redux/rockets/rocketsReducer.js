import axios from 'axios';

const GET_ROCKETS = 'GET_ROCKETS';
const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = (payload) => ({ type: GET_ROCKETS, payload });

export const fetchRocketsData = () => async (dispatch) => {
  const response = await axios.get(url);
  const data = await response.data;
  const rockets = [];
  data.forEach((item) => {
    rockets.push({
      id: item.id,
      rocket_name: item.rocket_name,
      description: item.description,
      flickr_images: item.flickr_images[0],
      reserved: false,
    });
  });
  dispatch(getRockets(rockets));
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketsReducer;
