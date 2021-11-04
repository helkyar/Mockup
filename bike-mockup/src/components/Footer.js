import React, { Component } from 'react';
import facebook from '../img/faceb.svg';
import twitter from '../img/twit.svg';
import wifi from '../img/wifi.svg';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <a href='#'>Aviso Legal</a>
        <a href='#'>Política privacidad</a>
        <a href='#'>Gastos de envío</a>
        <a href='#'>Sistemas de pago</a>
        <a href='#'>Plazos de entrega</a>
        <a href='#'>Devoluciones</a>
        <div class='media'>
          <a href='#'>
            <img src={facebook} alt='' />
          </a>
          <a href='#'>
            <img src={twitter} alt='' />
          </a>
          <a href='#'>
            <img src={wifi} alt='' />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
