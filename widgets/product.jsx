import React, { Component } from 'react';
import Counter from './counter'; 
import cookie from 'react-cookies';
import "../css/product.scss"; 

class Product extends Component{
  constructor(props){
    super(props); 

    this.state = {
      id: this.props.id,
      price: this.props.price,
      quantity: this.props.productQuantity | 1,
      name: this.props.title,
      type: this.props.type,
      img: this.props.image
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addtoCart = this.addtoCart.bind(this);
  }
  render(){ 
    return( 
      <React.Fragment>
        <div className="product-box ">
          <div className="product-image">
            <div className="imageInner" style={{backgroundImage: `url(${this.state.image})`}}></div>
          </div>
          <h6>Category: {this.state.type}</h6>
          <h5>{this.state.name}</h5>
          <h4>price: ${this.state.price}</h4>
          <Counter productQuantity={this.state.quantity} updateQuantity={this.updateQuantity}  />
          <button onClick={this.addtoCart} className="add-cart">Add to cart</button>
        </div>
      </React.Fragment>
    )
  }

   //Reset Quantity
  updateQuantity(qty) { 
    this.setState({
      quantity: qty
    });
  }

  // Add to cart 
  addtoCart = () => {
    let cartItems = (cookie.load('cart-items') == undefined)?[]:cookie.load('cart-items');
    let id = this.state.id;
    let cartExist = cartItems.findIndex(item => {
      return item.id === id
    });
    if(cartExist >= 0){
      cartItems[cartExist].quantity += this.state.quantity;
    } else {
      cartItems.push(this.state);
    }  
    cookie.save('cart-items', cartItems);  
  } 
}

export default Product;