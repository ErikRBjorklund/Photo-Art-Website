import React, { useEffect } from 'react'
import Navigation from '../components/navbar';
import { useState } from "react";

import checkout_styles from '../components/css/checkout.css'

const Checkout = () => {

  const [items, setItems] = useState([]);

  // Updates state on item removal
  useEffect(() => {
    const x = localStorage.getItem('cart').split('|')
    setItems(x);
  }, [])
  // Handles removal of cart item (per specifications)
  const remove = (item) => {
    localStorage.setItem('cart', "");
    var x = items.filter((filter_item) => {
      if (filter_item != item) {
        localStorage.setItem('cart', localStorage.getItem('cart') + "|" + filter_item);
      }
      return filter_item != item;
    })
    setItems(x);
  }

  return (
    <>
      <Navigation />
      <h2 id="cart_header">Your Cart:</h2>
      <div id="cart">
        {items.map((item, key) => {
          if (item !== '') {
            const json_item = JSON.parse(item)

            return (
              <div className="cart_child" key={key}>

                <img src={require(`../${json_item.source}`)} height="200px" alt={json_item.alt} />
                <h2>{json_item.name}</h2>
                <h2>${json_item.price}</h2>
                <button className="checkout_button" onClick={() => remove(item)}>Remove from cart</button>
              </div>

            )
          }
        })}
      </div>
      <button className="button">Checkout</button>
    </>
  )
}

export default Checkout;

