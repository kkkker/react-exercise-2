import React, { Component } from 'react';
import Phone from './phone';

class Phones extends Component {
  render() {
    const { category, products, onAddToCart } = this.props;
    return (
      <div className="category">
        <h2>{category}</h2>
        <div className="phones">
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
      </div>
    );
  }
}

export default Phones;
