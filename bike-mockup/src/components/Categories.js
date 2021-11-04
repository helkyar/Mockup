import React, { Component } from 'react';
import Categorie from './subcomponents/Categorie';

export class Categories extends Component {
  render() {
    let categories = [];
    for (let i = 0; i < 12; i++) {
      categories.push(<Categorie name='Botas' />);
    }
    return (
      <>
        <div class='phone-displayer'>Categorías</div>
        <aside>
          <a href='#'>Categorías</a>
          {categories}
        </aside>
      </>
    );
  }
}

export default Categories;
