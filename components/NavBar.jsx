import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <i className="fab fa-jenkins fa-3x" />
    <h1>WrongMove</h1>
    <ul className="nav">
      <Link to="/">View properties</Link>
      <Link to="/add-property">Add a property</Link>
    </ul>
  </div>
);

export default NavBar;
