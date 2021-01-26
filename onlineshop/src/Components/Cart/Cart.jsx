import React from "react"
import './Cart.css';
import {useState, useEffect} from 'react';

const LOCAL_STORAGE_KEY = 'onlineshop.cart'

function Cart(props) {
    

    const [cart, setCart] = useState([]);

    //save cart when page reloaded
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedCart) setCart(storedCart)
    }, [])

    //save cart to local storage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart))
    }, [cart])



    return(
       <div>
           <h1>Your Cart</h1>
           <button onClick= {() => localStorage.clear()}>Delete Cart</button>
           {props.cartContent.map((album, index) => (
            <label className="cart" key={index}>
              <img src = {album.cover} alt = {album.cover}/>
              <li>{album.name}</li>
              <li>{album.artist}</li>            
              <li>{album.price}</li>
          </label> 
          ))}
       </div>
    );
}

export default Cart;