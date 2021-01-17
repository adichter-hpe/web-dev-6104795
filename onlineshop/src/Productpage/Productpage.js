import React from "react"
import './Productpage.css';
import {useState} from 'react';

function Productpage() {
  
  //creating a state for items in cart
  const [cart, setCart] = useState([]);
  
  //creating a state to get a array where new albums can be added
  const [albmums] = useState([
    {
        name: "Dark Side of the Moon",
        artist: "Pink Floyd",
        price: "17,99€",
        cover: "https://i.pinimg.com/736x/60/cc/e6/60cce69065efbc413bc20382c664b503.jpg"
    },
    {
        name: "Wish You Were Here",
        artist: "Pink Floyd",
        price: "19,99€",
        cover: "https://miro.medium.com/max/700/1*Aad3rcP6yKOj3LgWqx75gA.jpeg"
    },
    {
        name: "The Division Bell",
        artist: "Pink Floyd",
        price: "14,99€",
        cover: "https://images-na.ssl-images-amazon.com/images/I/71SfWZAY%2BPL._SL1500_.jpg"
    },
    {
        name: "Abbey Roud",
        artist: "The Beatles",
        price: "12,99€",
        cover: "https://www.tagesspiegel.de/images/members-of-the-beatles-cross-abbey-road-in-london/24883714/1-format43.jpg"
    },
    {
        name: "Let It Be",
        artist: "The Beatles",
        price: "13,99€",
        cover: "https://images-na.ssl-images-amazon.com/images/I/51F-JrWga3L.jpg"
    },
    {
        name: "Revolver",
        artist: "Beatles",
        price: "15,99€",
        cover: "https://images-na.ssl-images-amazon.com/images/I/A1ZeriZs9BL._SL1500_.jpg"
    },
    {
        name: "Can't Buy A Thrill",
        artist: "Steely Dan",
        price: "18,99€",
        cover: "https://images-na.ssl-images-amazon.com/images/I/915ZUQRj-rL._SL1500_.jpg"
    },
    {
        name: "Gaucho",
        artist: "Steely Dan",
        price: "17,99€",
        cover: "https://media1.jpc.de/image/w600/front/0/0008811205522.jpg"
    },
    {
        name: "Over-Nite Sensation",
        artist: "Frank Zappa",
        price: "20,99€",
        cover: "https://imagescdn.juno.co.uk/full/CS493727-01A-BIG.jpg"
    },
    {
        name: "I Robot",
        artist: "The Alan Parsons Project",
        price: "11,99€",
        cover: "https://www.booknerds.de/wp-content/uploads/2017/08/13605484925_7327d87dd5_b.jpg"
    }
  ])
  
  //function to add items to the cart
  const addToCart = (albmum) => {
    //add album to the cart
    setCart([...cart, albmum])
  }

  return (
    //rendering the array of albums
    <div className="App">
      <h1>Albums</h1>
      <div className="albums">
        {albmums.map((albmum, index) => (
            <div className="album" key={index}>
              <h3>{albmum.name}</h3>
              <pre>{albmum.artist}</pre>
              <img src = {albmum.cover} alt = {albmum.cover}/>
              <h4>{albmum.price}</h4>
              <button onClick= {() => addToCart(albmum)}>Add to Cart</button>
          </div> 
        ))}
      </div>
      
    </div>
  );
}

export default Productpage;
