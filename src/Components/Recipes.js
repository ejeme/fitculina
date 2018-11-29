import React, { Component } from 'react';
import data from '../data.json';

const Recipes = props => {
  return (
    <a href={props.url}>
      <img src={props.image} className="recipe-container" />
    </a>
  );
};
export default Recipes;
