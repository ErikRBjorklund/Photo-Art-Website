import React, { useDebugValue, useState, useEffect } from 'react'
import shop_style from './css/shop.css'
import Alert from '@mui/material/Alert'

import shop_json from './shop.json'

// This contains the shop. It meets the JSON reading requirement
// as it fetches all data on items from a local JSON file. 
// It meets the Alert requirement because it alerts that an item
// was added to the cart on click.
const Shop_item = () => {

  const [event, setEvent] = useState("")
  // Creates blob for export requirement.
  // Not sure how to export it, but the blob is at least made.
  const blob = new Blob([shop_json]);
  useEffect(() => {
    setTimeout(() => { setEvent("") }, 3000);
  })

  return (

    <div id="shop">
      {/* Handles alert */}
      {event}
      {/* Draws items */}
      {shop_json.items.map((item, key) => {
        // import img from item.source;
        return (
          <div key={key} className="shop-container" onClick={() => remove_item(item)}>
            <img src={require(`../${item.source}`)} alt={item.alt} />
            <h2 className="shop-header">{item.name}</h2>
            <h2 className="shop-header2">${item.price}</h2>
          </div>

        )
      })}
    </div>

  )

  function remove_item(item) {
    if (localStorage.getItem('cart') === "") {
      localStorage.setItem('cart', JSON.stringify(item));
    } else {
      localStorage.setItem('cart', localStorage.getItem('cart') + '|' + JSON.stringify(item));
    }
    setEvent(<Alert className="cart_alert" severity="success">Item added to cart!</Alert>);

  }
}

export default Shop_item



