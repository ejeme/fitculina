import React, { Component } from 'react';
import logo from '../fitculina-logo.gif';
import Header from '../Components/Header';
import Recipes from '../Components/Recipes';
import Data from '../data.json';

class Menu extends Component {
  state = {
    data: Data
  };

  render() {
    return (
      <div className="body">
        <Header />
        <div>
          {this.state.data.map(item => (
            <Recipes
              key={item.id}
              id={item.id}
              url={item.url}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
