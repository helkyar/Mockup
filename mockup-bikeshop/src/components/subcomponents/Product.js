import React, { useState } from 'react';

function Product (props) {
    const [count, setCount] = useState(0)

    return (
      <article class='product'>
        <p>Producto de los buenos</p>
        <img src={props.src} alt='' />
        <button class='buy' onClick={()=>setCount(count+1)}>Comprar</button>
        <p>
          
          <strong>429,95€ [{count}]</strong>
        </p>
      </article>
    );
  }

export default Product;