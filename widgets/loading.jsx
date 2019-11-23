import React, { Component } from 'react';
import ProductLoaderSingle from './single';

class ProductLoader extends Component{
  render(){
    return(
      <React.Fragment> 
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ProductLoaderSingle/>
        </div> 
      </React.Fragment>
    )
  }
}
export default ProductLoader;