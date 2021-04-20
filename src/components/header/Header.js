import React from 'react';
import './header.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import About from '../../screen/aboutUs.js';

const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
