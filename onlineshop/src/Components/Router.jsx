import Nav from './Navbar/Nav.jsx';
import Productpage from './Productpage/Productpage.jsx';
import Cart from './Cart/Cart.jsx';
import Checkout from './Checkout/Checkout.jsx';
import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'onlineshop.cart'

class Router extends Component {

  constructor (props){
    super(props);
    this.state = {
        cart : []
    }
  } 

  //saving state variables in cache
  componentDidMount () {
    const cartContent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (cartContent) this.state.cart = cartContent
    this.forceUpdate()
  }

  //3 callback functions to update cart
  updateCart (input) {
    this.state.cart.push(input)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.cart))
    this.forceUpdate()
  }
  
  deleteCart (input) {
    this.state.cart.splice(input, 1)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.cart))
    this.forceUpdate()
  }

  deleteCartAll () {
    this.state.cart=[]
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.state.cart))
    this.forceUpdate()
  }
  
  render() {
        return ( 
          <BrowserRouter>  
            <div>
              <Nav/>
                  <Switch>
                      <Route path="/" exact component={Productpage} />
                      <Route path="/productpage" render={(props) => <Productpage {... props} cartContent={this.state.cart} updateCart={this.updateCart.bind(this)}/>} />
                      <Route path="/cart" render={(props) => <Cart {... props} cartContent={this.state.cart} updateCart={this.updateCart.bind(this)} deleteCart={this.deleteCart.bind(this)} deleteCartAll={this.deleteCartAll.bind(this)}/>} />
                      <Route path="/checkout" render={(props) => <Checkout {... props} cartContent={this.state.cart} deleteCartAll={this.deleteCartAll.bind(this)}/>}/>   
                  </Switch>
            </div>
          </BrowserRouter> 
        )
  }
}

export default Router;