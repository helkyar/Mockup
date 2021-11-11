import React, { Component } from 'react';
import facebook from '../img/faceb.svg';
import twitter from '../img/twit.svg';
import wifi from '../img/wifi.svg';

const links = [
  "Aviso Legal", "Política privacidad", "Gastos de envío",
  "Sistemas de pago", "Plazos de entrega", "Devoluciones"
]

export class Footer extends Component {
  render() {
    return (
      <footer>
        {links.map((link) => <a href='#'>{link}</a>)}
        
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
