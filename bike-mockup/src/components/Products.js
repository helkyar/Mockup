import React, { Component } from 'react';
import Pagination from './subcomponents/Pagination';
import Product from './subcomponents/Product';

//Don't have enougth energy to import them all
//And couldn't find any efficient way in my 5s search
import helmet from './../img/casco0.jpg';

export class Products extends Component {
  render() {
    let products = [];
    for (let i = 0; i < 12; i++) {
      products.push(<Product src={helmet} />);
    }
    return (
      <>
        <section>
          <a class='rebel-link' href='#'>
            Artículos más vendidos
          </a>
          <div class='order'>Ordear por: </div>
          <div class='product-wrapper'>
            {products}
            <Pagination />
          </div>
        </section>
      </>
    );
  }
}

export default Products;
