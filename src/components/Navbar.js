import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (
  <nav className="dflex">
    <div className="navLogo dflex">
      <img src={logo} alt="" />
      <h3>Space Travelers&apos; Hub</h3>
    </div>
    <ul className="dflex">
      <li><NavLink to="/space-travelers/">Rockets</NavLink></li>
      <li><NavLink to="/space-travelers/missions/">Missions</NavLink></li>
      <li><NavLink to="/space-travelers/my-profile/">My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
