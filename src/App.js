import React, { Component } from 'react';
import './App.scss';
import Header from './header/header';
import Content from './content/content';

class App extends Component {
  state = {};

  handleAddToCart = (name) => {
    const products = this.state.products.map((product) => {
      if (product.name === name) {
        return {
          ...product,
          number: product.number + 1,
        };
      }
      return {
        ...product,
      };
    });

    this.setState({
      products: products,
    });
  };

  componentDidMount() {
    function fetchData(url) {
      return fetch(url).then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.statusText);
      });
    }
    const URL = 'http://localhost:3000/products';
    fetchData(URL)
      .then((result) => {
        const products = result.map((product) => {
          return {
            ...product,
            number: 0,
          };
        });
        this.setState({
          products: products,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.products === undefined) {
      return <main className="app"></main>;
    }
    return (
      <main className="app">
        <Header
          productsNumber={this.state.products.reduce((acc, cur) => {
            return cur.number + acc;
          }, 0)}
        />
        <Content
          products={this.state.products}
          onAddToCart={this.handleAddToCart}
        />
      </main>
    );
  }
}

export default App;
