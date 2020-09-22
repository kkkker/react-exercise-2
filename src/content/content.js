import React, { Component } from 'react';
import Phones from './phones';

class Content extends Component {
  render() {
    const { products, onAddToCart } = this.props;
    const categorys = [...new Set(products.map((product) => product.category))];
    return (
      <div className="content">
        {categorys.map((category) => {
          return (
            <Phones
              category={category}
              products={products.filter(
                (product) => product.category === category
              )}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    );
  }
}

export default Content;
