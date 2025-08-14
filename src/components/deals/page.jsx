'use client'
import Image from 'next/image'
import React from 'react'
import deal from '../../../public/imges/deal.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Deals = () => {
  return (
    <div className='container mx-auto px-[10%] flex items-center justify-between gap-5 my-[120px]'>
      <div className="text-content">
        <h1 className='text-5xl mb-5'>Deals of Months</h1>
        <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, velit non optio sint vero molestiae expedita reprehenderit error quas iusto quo autem. Tempore beatae assumenda aliquid deleniti provident amet sed?</p>
        <div className="details mb-10 sm:flex items-center gap-5">
          <div className='border p-5 rounded-lg w-24'>
            <h2 className="font-bold text-3xl text-center">120</h2>
            <p className='text-xl text-center'>Days</p>
          </div>
          <div className='border p-5 rounded-lg w-24'>
            <h2 className="font-bold text-3xl text-center">18</h2>
            <p className='text-xl text-center'>Hours</p>
          </div>
          <div className='border p-5 rounded-lg w-24'>
            <h2 className="font-bold text-3xl text-center">15</h2>
            <p className='text-xl text-center'>Mins</p>
          </div>
          <div className='border p-5 rounded-lg w-24'>
            <h2 className="font-bold text-3xl text-center ">10</h2>
            <p className='text-xl text-center'>Secs</p>
          </div>
         
          
         
        </div>
       <button className='btn px-5  py-3 rounded-md bg-black text-white flex items-center gap-5 '>
        View All Products <FaLongArrowAltRight className='text-lg' /> </button>
      </div>
     
        <Image src={deal} className='w-[500px]' />
      
    </div>
  )
}

export default Deals
