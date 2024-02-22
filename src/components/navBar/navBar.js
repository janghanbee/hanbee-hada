import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
        <ul className="Navlinks">
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/project'>PROJECT</Link>
          </li>
          <li>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;