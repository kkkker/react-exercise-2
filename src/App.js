import React, { Component } from 'react';
import './App.scss';
import Header from './header/header';

class App extends Component {
  state = {
    shoppingCart: [{}],
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
        console.log(result);
        const state = result.map((product) => {
          return {
            product: product,
            number: 0,
          };
        });
        console.log(state);
        this.setState({
          shoppingCart: state,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <main className="app">
        <Header
          productsNumber={this.state.shoppingCart.reduce((acc, cur) => {
            return cur.number + acc;
          }, 0)}
        />
      </main>
    );
  }
}

export default App;
