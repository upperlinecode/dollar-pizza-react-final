import React, { Component } from 'react';
import Navbar from './components/navbar'
import Pizza from './components/pizza'
import Menu from './components/menu'
import './App.css';

const App = () => {
  const component = new React.Component()

  component.render = () => {
    return(
      <div className="App">
        <Pizza/>
        <Menu/>
      </div>
    )
  }

  return component
}

export default App;
