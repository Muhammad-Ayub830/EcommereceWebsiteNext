'use client'
import Footer from '@/components/footer/page'
import Navbar from '@/components/navbar/page'
import React, { useContext, useEffect, useState } from 'react'
import { FaStripe } from 'react-icons/fa6'
import { SiRazer } from 'react-icons/si'
import { SiRazorpay } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { itemsContext } from '../Context'
import { toast } from 'react-toastify'
const Orderplace = () => {
    
    const {cart} = useContext(itemsContext)
    const [Subtotal,setSubtotal] = useState(0)
      const [total,settotal] = useState(0)
      const [fee,setfee] = useState(0)
      const [dism,setdism] = useState(0)
      const [check,setcheck] = useState('')
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
            <div className="placeOrder mt-[40px] items-center container mx-auto px-[10%] flex justify-between basis-1/2">
                <div className="form">
                    <h1 className='text-2xl mb-10'>Delivery Information</h1>
                    <div className="input flex gap-2 ">
                        <input type="text" className='basis-1/2 border p-1 pl-3' placeholder='First Name' />
                        <input type="text" className='basis-1/2 border p-2 pl-3' placeholder='Last Name' />
                    </div>
                    <input type="email" name="" placeholder='Email' id="" className='w-[100%] p-2 border my-2 pl-3' />
                    <input type="email" name="" placeholder='Steet' id="" className='w-[100%] p-2 border my-2 pl-3' />
                    <div className="input flex gap-2 ">
                        <input type="text" className='basis-1/2 p-2 border my-2 pl-3' placeholder='City' />
                        <input type="text" className='basis-1/2 p-2 border my-2 pl-3' placeholder='State' />
                    </div>
                    <div className="input flex gap-2 ">
                        <input type="text" className='basis-1/2 p-2 border my-2 pl-3' placeholder='Zip-code' />
                        <input type="text" className='basis-1/2 p-2 border my-2 pl-3' placeholder='Country' />
                    </div>
                    <input type="phone" placeholder='Phone' className='w-[100%] p-2 border my-2 pl-3' />
                </div>
                <div className="payment basis-1/2">
                    <h1 className='text-2xl mb-10'>Cart Totals</h1>
                    <div className="line flex justify-between border-b py-1">
                        <p>Subtotal</p>
                        {Subtotal}
                    </div>
                    <div className="line flex justify-between border-b py-1">
                        <p>Shipping Fee</p>
                        {fee}
                    </div>
                    <div className="line flex justify-between  py-1">
                        <p>Total</p>
                        {total}
                    </div>
                    <h2 className='text-xl mt-8 mb-5 text-gray-800'>Payment Method</h2>
                    <div className="options grid grid-cols-[1fr_1fr_1fr] gap-3 items-center">
                        <div onClick={()=>setcheck('stripe')} className="option p-2 px-4 h-[40px] flex cursor-pointer  justify-between border items-center">
                            <span  className={ ` ${check == 'stripe'? 'bg-green-500 border-green-500' : '' } transition-colors rounded-full  border w-4 h-4 mr-1 `}></span>
                            <FaStripe className='text-4xl text-blue-700 ' />
                        </div>
                        <div onClick={()=>setcheck('paypal')} className="option p-3 h-[40px]  flex cursor-pointer  justify-between border items-center">
                           <span  className={ ` ${check == 'paypal' ? 'bg-green-500 border-green-500' : '' } transition-colors rounded-full  border w-4 h-4 mr-1 `} ></span>
                            <FaCcPaypal className='text-4xl  text-blue-700 ' />
                        </div>
                        <div onClick={()=>setcheck('Cod')} className="option p-2 h-[40px] flex cursor-pointer  justify-between border items-center">
                            <span  className={ ` ${check == 'Cod'? 'bg-green-500  border-green-500' : '' } transition-colors rounded-full w-4 h-4  border  mr-1 `}></span>
                            <p>Cash on Delivery</p>
                        </div>
                    </div>
                    <div className="flex">
                        <button disabled={!check}
                        onClick={()=>toast.success("order placed!") }
                         className={`${!check? 'cursor-not-allowed' : ' cursor-pointer'} ml-auto mt-10 w-[200px] p-2 bg-black text-white`}> Place Order</button>

                    </div>
                </div>
            </div>

        </>


    )
}

export default Orderplace
