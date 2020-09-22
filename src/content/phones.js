import React, { Component } from 'react';
import Phone from './phone';

class Phones extends Component {
  render() {
    const { category, products, onAddToCart } = this.props;
    return (
      <div className={category}>
        {products.map((product) => {
          return (
            <Phone
              key={product.name}
              product={product}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    );
  }
}

export default Phones;
