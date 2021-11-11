import React, { Component } from 'react';
import Dropdown from './subcomponents/Dropdown';
import NavBar from './subcomponents/NavBar';

import suit from './../img/ropa1.jpg';

const list = [
  "Inicio","Carretera", "Ciudad", "Off Road",
   "Trail", "Trial", "Casual", "Accesorios"
];

export class Header extends Component {
  render() {
    let dropdown = [];
    for (let i = 0; i < 5; i++) {
      dropdown.push(<Dropdown src={suit} />);
    }
    return (
      <header class='header'>
        <NavBar />
        <div class='displayer'>
          <ul class='mg-left'>
            {list.map((name)=> <li> {name} </li>)}
          </ul>
          <div class='product-nav'>
            <div class='link-wrapper'>
              <a href='#'>Artículos destacados</a>
              <a href='#'>Marcas más vendidas</a>
            </div>
            <ul class='product-nav-list'>
              {dropdown}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
