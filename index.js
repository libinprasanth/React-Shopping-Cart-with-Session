import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { render } from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

import { Wrapper } from './components/main';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Wrapper></Wrapper>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')); 