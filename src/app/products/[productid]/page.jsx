'use client'
import { itemsContext } from '@/app/Context'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import Productframe from '@/components/productframe/page'
import Products from '@/components/products/page'
import Title from '@/components/title/title'
// import { P } from 'framer-motion/dist/types.d-Cjd591yU'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect } from 'react'

const ProductIdd = () => {
  const {items} = useContext(itemsContext)
  const url = useParams()
  const id = url.productid

  if(!items || items.length === 0){
    return <p>loading</p>
  }
  

   const product = items.find(item=>item.id == id)

 if (!product) {
  return <p>Product not found</p>
}
  return (
    <>
      <div className='container mx-auto'>
        <Navbar />
      
    <Productframe product={product} />
    <Products plenght={'normal'} items={items}/>
    </div>
    <Footer/>
    </>
  
  )
}

export default ProductIdd
