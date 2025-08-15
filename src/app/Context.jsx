'use client'
import React, { createContext, useEffect, useState } from 'react'
export const itemsContext = createContext()

const Context = ({children}) => {

  const [items,setItems] = useState([])
  const [cart,setCart] = useState([])
  // adding items to cart 
const addtocart = (id, size, color, quantity) => {
  console.log(cart)
  setCart(prevCart => {
    // Find if item already exists with same id, size, and color
    const existingIndex = prevCart.findIndex(
      item => item.id === id && item.size === size && item.color === color
    );

    if (existingIndex !== -1) {
      // Copy the cart and update the quantity
      const updatedCart = [...prevCart];
      updatedCart[existingIndex] = {
        ...updatedCart[existingIndex],
        quantity: Number(updatedCart[existingIndex].quantity) + Number(quantity)
      };
      return updatedCart;
    } else {
      // Add new item to the cart
      return [
        ...prevCart,
        {
          id,
          size,
          color,
          quantity,
          date: Date.now()
        }
      ];
    }
  });
};

  // fetching data 
 const fetchdata = async()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();
             setItems(products)
        }

  useEffect(()=>{  
    fetchdata()
  },[])
  return (
    <itemsContext.Provider value={{items,setItems,cart,setCart,addtocart}}>
        {children}
    </itemsContext.Provider>
  )
}

export default Context
