import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
    <ul>

      <l1><NavLink exact to="/pokemon-list" activeClassName="bold">Pokemon List</NavLink></l1>
    </ul>
      </nav>
    );
  }
}

export default Navbar;
