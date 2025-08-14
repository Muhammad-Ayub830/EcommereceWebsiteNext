import Image from 'next/image'
import React from 'react'

const Productframe = ({product}) => {
    const rating = product.rating.rate;
    console.log(product)
  return (
    <>
    <p className=' px-[10%] text-2xl mb-5'>Category : {product.category} </p>
     <div className='container mx-auto px-[10%] md:flex items-center justify-between mb-25'>
      <div className="p-10 basis-1/2 bg-gray-100  rounded-3xl">
          <div className="img relative  w-[100%] h-[400px] ">
        <Image src={product.image} fill className='object-contain '  />
      </div> 
      </div>
    
      <div className="text basis-1/2 p-10">
        <h1 className='text-3xl font-bold mb-3 '>{product.title}</h1>
        {/* <p className="rating mb-3">{}  </p> */}
        <h1 className="price text-2xl font-bold">$ {product.price} </h1>
        <div className="description text-gray-600 mt-3">
            {product.description}
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Productframe
