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
      <Route path="/space-travelers/" element={<Rockets />} />
      <Route path="/space-travelers/missions/" element={<Missions />} />
      <Route path="/space-travelers/my-profile/" element={<Profile />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
