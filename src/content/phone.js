import React, { Component } from 'react';
import placeholder from '../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    const { product, handleAddToCart } = this.props;
    return (
      <div className={product.name}>
        <h3>{product.name}</h3>
        <img src={placeholder} alt="placeholder" />
        <p>{product.price}</p>
        <button onClick={handleAddToCart}>add to cart</button>
      </div>
    );
  }
}

export default Phone;
