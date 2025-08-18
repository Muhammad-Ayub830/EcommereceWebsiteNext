'use client'
import React, { createContext, useEffect, useState } from 'react'
export const itemsContext = createContext()

const Context = ({children}) => {
  const [items,setItems] = useState([])
  const [cart,setCart] = useState([])


  // adding items to cart 
  const addtocart = (id, size, color, quantity, image, price,name) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(
        item => item.id === id && item.size === size && item.color === color
      );

      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: Number(updatedCart[existingIndex].quantity) + Number(quantity)
        };
        return updatedCart;
      } else {
        return [
          ...prevCart,
          { id, size, color, quantity, date: Date.now(), image, price,name }
        ];
      }
    });
  };



 

  // fetching products 
  const fetchdata = async()=> {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    setItems(products)
  }

  //  Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

  }, []);

  //  Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart" , JSON.stringify(cart));
       
  }, [cart]);

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
