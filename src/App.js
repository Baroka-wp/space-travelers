import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Missions from './components/Missions';
import NoMatch from './components/NoMatch';
import Profile from './components/Profile';
import Rockets from './components/Rockets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions/" element={<Missions />} />
      <Route path="/my-profile/" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
