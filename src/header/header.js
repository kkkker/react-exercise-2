import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

class Header extends Component {
  render() {
    const { productsNumber } = this.props;
    return (
      <header>
        <h1>Store</h1>
        <div className="shopping_cart">
          <FiShoppingCart className="icon" />
          <p className="product_number">
            <i>{productsNumber}</i>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
