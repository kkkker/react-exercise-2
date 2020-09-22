import React, { Component } from 'react';
import placeholder from '../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    const { product, onAddToCart } = this.props;
    return (
      <div className="phone">
        <h3>{product.name}</h3>
        <img className="phone_img" src={placeholder} alt="placeholder" />
        <div className="purchase">
          <p>{product.price}</p>
          <button onClick={() => onAddToCart(product.name)}>add to cart</button>
        </div>
      </div>
    );
  }
}

export default Phone;
