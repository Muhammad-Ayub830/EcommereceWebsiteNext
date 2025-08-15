import { itemsContext } from '@/app/Context';
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { FaStar } from 'react-icons/fa';

const Productframe = ({product}) => {
  const {addtocart,cart} = useContext(itemsContext)
  const [size,setSize] = useState('')
  const [color,setColor] = useState('')
  const [quantity,setquantity] = useState('1')
    const rating = product.rating.rate;
    console.log(cart)

  return (
    <>
    <p className=' px-[10%] text-2xl mb-5'>Category : {product.category} </p>
     <div className='container mx-auto px-[10%] md:flex gap-x-5 items-center justify-between mb-25'>
      <div className="p-10 basis-1/2 bg-gray-100  rounded-3xl">
          <div className="img relative  w-[100%] h-[400px] ">
        <Image src={product.image} fill className='object-contain '  />
      </div> 
      </div>
    
      <div className="text basis-1/2 ">
        <h1 className='text-3xl font-bold mb-3 '>{product.title}</h1>
        <p className="rating mb-3 gap-1 flex items-center">{
          Array.from({length:rating},(_,i)=><FaStar className='text-amber-300 ' key={i} /> )
          } <span className='ml-2 font-bold'>{rating}</span>  </p>
        <h1 className="price text-2xl font-bold">$ {product.price} </h1>
        <div className="description text-gray-600 mt-3 text-sm font-semibold">
            {product.description}
        </div>
        <hr className="text-gray-400 mt-4 mb-7" />
        <div className="Size flex gap-x-3">
          <p  onClick={(e)=>setSize(e.target.textContent)} className={`${size == 'M' ?'border border-gray-400 rounded-full bg-gray-300' :''} transition duration-700  font-bold  bg-gray-200  w-[50px] py-3 text-center rounded`}>M</p>
          <p onClick={(e)=>setSize(e.target.textContent)} className={`${size == 'S' ?'border border-gray-400 rounded-full bg-gray-300' :''} transition duration-700  font-bold  bg-gray-200  w-[50px] py-3 text-center rounded`}>S</p>
          <p onClick={(e)=>setSize(e.target.textContent)}  className={`${size == 'L' ?'border border-gray-400 rounded-full bg-gray-300' :'' } transition duration-700  font-bold  bg-gray-200  w-[50px] py-3 text-center rounded`}>L</p>
          <p onClick={(e)=>setSize(e.target.textContent)}  className={`${size == 'XL' ?'border border-gray-400 rounded-full bg-gray-300' :''} transition duration-700  font-bold  bg-gray-200  w-[50px] py-3 text-center rounded`}>XL</p>
        </div>
        <div className="color flex gap-x-3 mt-4">
          <p onClick={(e)=>setColor('#f7f7f8')}  className={` ${color == '#f7f7f8' ?' rounded-full' :'rounded'} font-bold  bg-[#f7f7f8] border border-gray-300  w-[50px] py-3 text-center `}></p>
          <p onClick={(e)=>setColor('#ce3d6d')}  className={` ${color == '#ce3d6d' ?' rounded-full' :'rounded'} font-bold bg-[#ce3d6d] w-[50px] py-3 text-center `}></p>
          <p onClick={(e)=>setColor('#3b6122')} className={` ${color == '#3b6122' ?' rounded-full' :'rounded'} font-bold bg-[#3b6122] w-[50px] py-3 text-center `}></p>
          <p onClick={(e)=>setColor('#000003')} className={` ${color == '#000003' ?' rounded-full' :'rounded'} font-bold bg-[#000003] h-[50px] w-[50px] py-3 text-center `}></p>
        </div>
        <div className="flex gap-x-2 items-center mt-5">
           <button disabled={!size || !color} onClick={()=>addtocart(product.id,size,color,quantity)}
         className={` ${!size || !color ? 'bg-gray-400 cursor-not-allowed':'cursor-pointer'}  grow-1  text-center py-3 rounded-md bg-black text-white  `}>
          Add to Cart </button>
          <input onChange={(e)=>setquantity(e.target.value)} type="number" className='py-2 text-center rounded-md pl-3 font-bold text-2xl bg-gray-300 w-[80px] ' defaultValue={1} min={1}/>
        </div>
       
        
      </div>
    </div>
    </>
   
  )
}

export default Productframe
