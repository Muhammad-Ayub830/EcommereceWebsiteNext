'use client'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import Products from '@/components/products/page'
import React, { useContext } from 'react'
import { itemsContext } from '../Context'

const page = () => {
    const {items} = useContext(itemsContext)
  return (
    <>
    <div className='container  mx-auto'>
      <Navbar/>
        <h2 className="text-3xl container font-semibold mx-auto px-[10%] pb-[3%] ">Products</h2>
    <Products items={items} plenght={'all'}/>
    </div>
      <Footer/>
    </>
    
  )
}

export default page
