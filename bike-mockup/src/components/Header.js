import React, { Component } from 'react';
import Dropdown from './subcomponents/Dropdown';
import logo from '../img/bike.svg';

import suit from './../img/ropa1.jpg';

export class Header extends Component {
  render() {
    let dropdown = [];
    for (let i = 0; i < 5; i++) {
      dropdown.push(<Dropdown src={suit} />);
    }
    return (
      <header class='header'>
        <nav>
          <div class='logo'>
            <h1>MOTOSHOP</h1>
            <img src={logo} alt='' />
          </div>
          <a href='#'>Ayuda</a>
          <a href='#'>Nuestras Tiendas</a>
          <a href='#'>Contacto</a>
        </nav>
        <div class='displayer'>
          <ul class='mg-left'>
            <li>Inicio</li>
            <li>Carretera</li>
            <li>Ciudad</li>
            <li>Off Road</li>
            <li>Trail</li>
            <li>Trial</li>
            <li>Casual</li>
            <li>Accesorios</li>
          </ul>
          <div class='product-nav'>
            <div class='link-wrapper'>
              <a href='#'>Artículos destacados</a>
              <a href='#'>Marcas más vendidas</a>
            </div>

            <ul class='product-nav-list'>{dropdown}</ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
