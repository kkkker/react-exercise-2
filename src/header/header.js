import React, { Component } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

class Header extends Component {
  render() {
    const { productsNumber } = this.props;
    return (
      <header>
        <p>Store</p>
        <div className="shopping_cart">
          <FiShoppingCart />
          <p>{productsNumber}</p>
        </div>
      </header>
    );
  }
}

export default Header;
