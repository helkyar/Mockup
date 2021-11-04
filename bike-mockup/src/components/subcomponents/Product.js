import React, { Component } from 'react';

export class Product extends Component {
  render() {
    return (
      <article class='product'>
        <p>Producto de los buenos</p>
        <img src={this.props.src} alt='' />
        <button class='buy'>Comprar</button>
        <p>
          <strong>429,95€</strong>
        </p>
      </article>
    );
  }
}

export default Product;
