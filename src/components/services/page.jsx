import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CiHeadphones } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
const Services = () => {
  return (
    <div className='container mx-auto mb-[100px] px-[10%] grid gap-10 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
      <div className="">
        <BsBoxSeam className='text-3xl mb-5 font-bold'/>
        <h3 className='text-2xl mb-3 font-bold'>Free Shipping</h3>
        <p className='text-gray-600'>Free shipping for order above 150$
        </p>
      </div>
      <div className="">
        <RiMoneyDollarCircleLine className='text-3xl mb-5 font-bold'/>
        <h3 className='text-2xl mb-3 font-bold'>Money Guarentee</h3>
        <p className='text-gray-600'>Within 30 days for an exchange
        </p>
      </div>
      <div className="">
        <CiHeadphones className='text-3xl mb-5 font-bold'/>
        <h3 className='text-2xl mb-3 font-bold'>Online Support</h3>
        <p className='text-gray-600'>24 Hours a day, 7 days a week
        </p>
      </div>
      <div className="">
        <MdPayment className='text-3xl mb-5 font-bold'/>
        <h3 className='text-2xl mb-3 font-bold'>Flexible Payment</h3>
        <p className='text-gray-600'>Pay with multiple cards
        </p>
      </div>

    </div>
  )
}

export default Services
 