import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/mine">Mine</Link></li>
        <li><Link to="/earn">Earn</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
