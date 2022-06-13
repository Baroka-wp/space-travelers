import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsReducer';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
