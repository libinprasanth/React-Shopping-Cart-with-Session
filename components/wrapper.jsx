import React, { Component } from 'react';
import { Header, Home, Cart } from './main';
import { Switch, Route } from 'react-router-dom';
class Wrapper extends Component{
  render(){
    return(
      <React.Fragment>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/cart'>
            <Cart></Cart>
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}
export default Wrapper;