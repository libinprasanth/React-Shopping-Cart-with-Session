import React, { Component } from 'react';
import '../css/counter.scss';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: this.props.productQuantity
    }
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  render(){
    let counter = this.state.counter;
    return(
      <React.Fragment>
       <div className="ui-counter">
        <div className="row align-items-center">
         <div className="col">
          <button onClick={this.handleDecrement}>-</button>
         </div>
         <div className="col text-center">
          <span>{counter}</span>
         </div>
         <div className="col text-right">
          <button onClick={this.handleIncrement}>+</button>
         </div>
        </div>
       </div>
      </React.Fragment>
    )
  }

  handleIncrement = () => {
    let quantity = this.state.counter;
    quantity += 1; 
    this.setState({
      counter: quantity
    }, function(){ 
      this.props.updateQuantity(quantity)
    })
  }

  handleDecrement = () => {
    let quantity = this.state.counter;
    quantity -= 1; 
    quantity = (quantity < 0)?0:quantity;
    this.setState({
      counter: quantity
    }, function(){ 
      this.props.updateQuantity(quantity)
    })
  }
}

export default Counter; 