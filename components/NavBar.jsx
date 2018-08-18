import React from 'react';
import '../NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <i className="fab fa-jenkins fa-3x"></i>
    <h1>Surreal Estate</h1>
    <ul className="nav">
      <li>View properties</li>
      <li>Add a property</li>
    </ul>
  </div>
);

export default NavBar;
