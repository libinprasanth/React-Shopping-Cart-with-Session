import React, { Component } from "react";
import cookie from "react-cookies";
import "../css/cart.scss";

class Cart extends Component {
  constructor() {
    this.state = {
      cartItems: cookie.load("cart-items") == undefined ? [] : cookie.load("cart-items"),
      loaded: false,
      shipping: 10,
      Subtotal: 0,
      total: 0,
      tax: 0
    }; 
    this.removeProduct = this.removeProduct.bind(this); 
  }

  componentDidMount() { 
    this.calculateTotal();
  } 
  calculateTotal = () => {  
    let cartItems = this.state.cartItems; 
    let total = 0;
    for(const[key, value] of Object.entries(this.state.cartItems)){ 
      total = total + value.price
    }  
    this.setState({ 
      Subtotal: total.toFixed(2),
      total: (this.state.shipping + total + this.state.tax).toFixed(2)
    })
  }

  removeProduct = id => {
    let cartItems = this.state.cartItems;
    let cartExist = cartItems.filter(item => {
      return item.id !== id;
    }); 
    this.setState({
      cartItems: cartExist
    });
    cookie.save("cart-items", cartItems); 
  };

  render() {
    let cartItems = this.state.cartItems;
    if (cartItems.length) {
      let content = cartItems.map(item => {
        return (
          <tr key={item.id}>
            <th scope="row" className="border-0">
              <div className="media">
                <div className="media-icon">
                  <div className="product-image">
                    <div
                      className="imageInner"
                      style={{ backgroundImage: `url(${this.state.image})` }}
                    />
                  </div>
                </div>
                <div className="media-body">
                  <div className="d-inline-block align-middle">
                    <h5 className="mb-0">{item.name}</h5>
                    <span className="text-muted font-weight-normal font-italic d-block">
                      Category: {item.type}
                    </span>
                  </div>
                </div>
              </div>
            </th>
            <td className="border-0 align-middle">
              <strong>${item.price}</strong>
            </td>
            <td className="border-0 align-middle text-center">
              <strong>{item.quantity}</strong>
            </td>
            <td className="border-0 align-middle text-center">
              <a
                onClick={() => this.removeProduct(item.id)}
                className="remove-cart"
              >
                ❌
              </a>
            </td>
          </tr>
        );
      });
      return (
        <React.Fragment>
          <section className="cart-wrp">
            <div className="container">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 bg-light">
                        <div className="p-2 px-3 text-uppercase">Product</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Price</div>
                      </th>
                      <th scope="col" className="border-0 bg-light">
                        <div className="py-2 text-uppercase">Quantity</div>
                      </th>
                      <th scope="col" className="border-0 bg-light" />
                    </tr>
                  </thead>
                  <tbody>{content}</tbody>
                </table>
              </div>
              <div className="row py-5 p-4 bg-white rounded shadow-sm">
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Coupon code
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have a coupon code, please enter it in the box
                      below
                    </p>
                    <div className="input-group mb-4 border rounded-pill p-2">
                      <input
                        type="text"
                        placeholder="Apply coupon"
                        aria-describedby="button-addon3"
                        className="form-control border-0"
                      />
                      <div className="input-group-append border-0">
                        <button
                          id="button-addon3"
                          type="button"
                          className="btn btn-dark px-4 rounded-pill"
                        >
                          <i className="fa fa-gift mr-2" />Apply coupon
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Instructions for seller
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      If you have some information for the seller you can leave
                      them in the box below
                    </p>
                    <textarea name="" cols="30" rows="2" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                    Order summary{" "}
                  </div>
                  <div className="p-4">
                    <p className="font-italic mb-4">
                      Shipping and additional costs are calculated based on
                      values you have entered.
                    </p>
                    <ul className="list-unstyled mb-4">
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Order Subtotal </strong>
                        <strong>${this.state.Subtotal}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">
                          Shipping and handling
                        </strong>
                        <strong>${this.state.shipping}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Tax</strong>
                        <strong>${this.state.tax}</strong>
                      </li>
                      <li className="d-flex justify-content-between py-3 border-bottom">
                        <strong className="text-muted">Total</strong>
                        <h5 className="font-weight-bold">${this.state.total}</h5>
                      </li>
                    </ul>
                    <a
                      href="javscript:;"
                      className="btn btn-dark rounded-pill py-2 btn-block"
                    >
                      Procceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <section className="cart-wrp">
            <div className="container">
              <h5>You have no items in your cart</h5>
            </div>
          </section>
        </React.Fragment>
      );
    }
  }

  
}

export default Cart;
