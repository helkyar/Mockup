import React, { Component } from 'react';

export class Pagination extends Component {
  render() {
    return (
      <>
        <div class='pagination'>
          <button class='btn-selected'>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>...</button>
          <button>Siguiente</button>
        </div>
      </>
    );
  }
}

export default Pagination;
