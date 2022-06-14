import axios from 'axios';

const GET_ROCKETS = 'space-traveleres/redux/GET_ROCKETS';
const TOGGLE_RESERVATION = 'space-traveleres/redux/TOGGLE_RESERVATION';

const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = (payload) => ({ type: GET_ROCKETS, payload });
export const toggleReservation = (payload) => ({ type: TOGGLE_RESERVATION, payload });

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

const changeReservationStatus = (state, id) => {
  const newState = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    return { ...rocket, reserved: !rocket.reserved };
  });
  return newState;
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case TOGGLE_RESERVATION:
      return changeReservationStatus(state, action.payload);
    default:
      return state;
  }
};

export default rocketsReducer;
