'use client'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import user from  '../../../public/imges/user-1.png'
import { MdDeleteForever } from "react-icons/md";
import { SiCodestream } from "react-icons/si";
import { FaDeleteLeft } from 'react-icons/fa6'
import { itemsContext } from '../Context'
import { ToastContainer, toast } from 'react-toastify';

import Link from 'next/link'
const Cart = () => {
  const {cart} = useContext(itemsContext)
  const [Subtotal,setSubtotal] = useState(0)
  const [total,settotal] = useState(0)
  const [fee,setfee] = useState(0)
  const [dism,setdism] = useState(0)
  const totalPrice = (dis,dfee)=>{
   let payment = 0;
      cart.map(item=>{
        payment += item.price
        
      })
      setSubtotal(payment)
      const discount = (payment*20)/100
      const sfinal = payment - discount
      const ffinal = sfinal+dfee
      setdism(sfinal)
        setfee(dfee)
      settotal(ffinal)
  }
  useEffect(()=>{
      totalPrice(10,15)
     
  },[cart])
  return (
   <>
   <Navbar />
   <div className="container mx-auto px-[5%]">
    <h2 className='text-4xl font-semibold text-[#000000e7] py-6'> Your Cart </h2>
    <div className="flex gap-4 mb-5"  >
      <div className="grow-1 border rounded-xl pt-3 px-5 border-gray-400">
        {
          cart?cart.map((item,i)=>(
                  <div className="items mb-5  border-b flex justify-between p-5  border-gray-300" key={i}>
        <div className="detail flex gap-4  items-center">
          <div className="relative img w-[150px] h-[150px] rounded-xl">
            <Image src={item.image} alt='img' className='rounded-xl' fill/>
          </div>
          <div className="desc font-bold flex flex-col">
            <div className="name  text-2xl mb-2 ">{item.name}</div>
            <div className="mb-1">Size: <span className='text-gray-500'>{item.size} </span></div>
            <div className="color mb-3">Color: <span className='text-gray-500'>{item.color}</span></div>
            <div className="price text-2xl">${item.price}</div>
          </div>
        </div>
        <div className="counter flex flex-col justify-between">
          <div className="image ml-auto">
            <MdDeleteForever className='text-3xl text-red-500'/>
          </div>
          <input type="number" className=' w-[100px] text-center font-bold py-2 pl-9 bg-gray-200 rounded-xl px-5' name="" required defaultValue={1} min={1} minLength={1} />
        </div>
      </div>
          )):<p>loading</p>
        }
      </div>
     
      <div className="price border basis-[45%] p-5 font-semibold rounded-xl border-gray-400 h-fit">
      <h2 className='text-3xl mb-5'>Order Summary</h2>
      <div className="patch flex justify-between items-center text-lg">
        <p className='text-gray-400'>Subtotal</p><p>{Subtotal}</p>
      </div>
      <div className="patch flex justify-between items-center text-lg">
        <p className='text-gray-400'>Discount(-20%)</p>
        <p className='text-red-500'>{dism}</p>
      </div>
      <div className="patch flex justify-between items-center text-lg">
        <p className='text-gray-400'>Delivery Fee</p>
        <p>{fee}</p>
      </div>
      <hr  className='text-gray-300 my-4'/>
       <div className="patch flex justify-between items-center text-2xl">
        <p className='text-2xl'>Total</p>
        <p>{total}</p>
      </div>
      <div className="btns flex gap-2 mt-5 ">
        <input placeholder='🏷 Add promo Code'  className='outline-none text-gray-500 rounded-lg text-center py-2  bg-gray-200 grow-1 ' />
      <Link href={'/orderPlace'} >  <button onClick={()=>toast.success("Coupon code applied!")} className='bg-black cursor-pointer  text-white px-5 rounded-lg py-3 leading-4'>Apply</button></Link>
      </div>
      </div>
    </div>
   </div>
   <Footer />
   </>
  )
}

export default Cart
