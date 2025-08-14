import Image from 'next/image'
import React from 'react'
import logow from '../../../public/imges/logow.png'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";

import { GrLocation } from "react-icons/gr";
import { FaLongArrowAltRight } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="bg-[#131118] ">
        <div className="footer container mx-auto gap-x-24 grid lg:gap-y-0 gap-y-10 lg:grid-cols-[1fr_1fr_1fr_2fr] md:grid-cols-3 sm:grid-cols-2 items-center justify-between w-[100%] py-15 px-[10%] text-[#ffffffab]">
      <div className="contact flex gap-4 justify-between flex-col">
        <Image src={logow} className='w-[100px] p-0 mb-5 ' alt='img'/>
        <p className='flex items-center justify-left gap-2'><MdOutlinePhoneInTalk className='text-2xl' /> (704) 555 0127</p>
        <p className='flex items-center justify-left gap-2'><CiMail className='text-2xl' /> Gulkhan@gmail.com</p>
        <p className='flex items-center justify-left gap-2'><GrLocation className='md:text-5xl' /> 3289 BoardBazar St.choloGalai, California 2738</p>
      </div>

      <div className="contact flex gap-2 justify-between flex-col">
        <h3 className='w-[100px] p-0 mb-1 text-2xl text-[#ffffffe7]' >Information</h3>
        <p >My Account</p>
        <p >Login</p>
        <p >My Cart</p>
        <p >Wishlist</p>
        <p >Checkout</p>  
      </div>

      <div className="contact flex gap-2 justify-between flex-col">
        <h3 className='w-[100px] p-0 mb-1 text-2xl text-[#ffffffe7]' >Service</h3>
        <p >About Us</p>
        <p >Careers</p>
        <p >Delivery Information</p>
        <p >Privacy Policy</p>
        <p >Terms & Conditions</p>  
      </div>

      <div className="contact flex gap-2 justify-between flex-col">
        <h3 className='w-[100px] p-0 mb-1 text-2xl text-[#ffffffe7]' >Subscribe</h3>
        <p >Enter your email below to be the first to know about new collections and product launches.</p>
        <div className='border px-5 mt-6 border-[#ffffffe7] p-3 rounded-xl flex items-center justify-between'>
          <p className='flex gap-2'><CiMail className='text-2xl' /> Email</p> <FaLongArrowAltRight className='text-lg' /> </div>
      </div>

     

    </div>
    </div>
  
  )
}

export default Footer
