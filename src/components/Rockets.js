import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsData } from '../redux/rockets/rocketsReducer';
import RocketsCard from './pages/RocketsCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsData());
  }, []);

  return (
    <div className="container">
      {
        rockets.map((item) => (
          <RocketsCard key={item.id} rocket={item} />
        ))
      }
    </div>
  );
};

export default Rockets;
