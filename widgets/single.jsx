import React, { Component } from "react";
import "../css/loader.scss";

class ProductLoaderSingle extends Component {
  render() {
    return (
      <div>
        <div className="product loading">
          <div className="product-image" />
          <div className="product-text" />
          <div className="product-text" />
          <div className="product-text" />
          <div className="product-button" />
        </div>
      </div>
    );
  }
}

export default ProductLoaderSingle;
