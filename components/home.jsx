import React, { Component } from 'react';
import ProductLoader from '../widgets/loading';
import Product from '../widgets/product';

import '../css/home.scss';
import axios from 'axios';
 
class Home extends Component{
  constructor(){ 
    this.state = {
      products: [],
      loaded: false,
    }
  }
 

  componentDidMount() {
    this.getProducts();
  }

  getProducts(){
    return axios.get('https://www.nearbo.com/json/products.json', {})
    .then(
      response => {
        this.setState({
          products: response.data,
          loaded: true
        });
      }
    ).catch(
      error => {
        console.log(error);
        this.setState({
          loaded: true
        });
      }
    )
  }
  render(){
    let loaded = this.state.loaded;
    let products = this.state.products;
    let view = <ProductLoader/>;   

    if(loaded){
      view = products.map(item => {
        return(
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.title}>
           <Product
            price={item.price}
            id={item.id}
            title={item.title}
            description={item.description}
            type={item.type}
            image={item.filename}
            rating={item.rating}
            productQuantity={item.qty}
            updateQuantity={item.qty}
           />
          </div>
        )
      }); 
    } 
    return(
      <React.Fragment>
        <section className="product-wrp">
          <div className="container">  
            <div className="row product-row">
            {view}
            </div> 

          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Home;