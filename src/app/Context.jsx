'use client'
import React, { createContext, useEffect, useState } from 'react'
export const itemsContext = createContext()

const Context = ({children}) => {

  const [items,setItems] = useState([])
 const fetchdata = async()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json();
             setItems(products)
        }
  useEffect(()=>{
       
        
    fetchdata()
  },[])
  return (
    <itemsContext.Provider value={{items,setItems}}>
        {children}
    </itemsContext.Provider>
  )
}

export default Context
