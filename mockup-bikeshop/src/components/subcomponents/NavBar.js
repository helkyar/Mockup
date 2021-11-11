import React, { Component } from 'react';
import logo from '../../img/bike.svg';

export class NavBar extends Component {
    render() {
      return (
        <nav>
            <div class='logo'>
            <h1>MOTOSHOP</h1>
            <img src={logo} alt='' />
            </div>
            <a href='#'>Ayuda</a>
            <a href='#'>Nuestras Tiendas</a>
            <a href='#'>Contacto</a>
        </nav>
      );
    }
  }
  
  export default NavBar;