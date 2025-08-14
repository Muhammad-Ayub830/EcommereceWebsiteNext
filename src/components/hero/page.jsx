import React from 'react'
import { Fahkwang, Jost } from 'next/font/google'
import { CiMail } from "react-icons/ci";
import { FaLongArrowAltRight } from 'react-icons/fa';
import hero from '../../../public/imges/heroPic.png'
import Image from 'next/image';
  const josts = Jost({
    subsets:['latin'],
  })
const Hero = () => {
  return (
    <div className={` ${josts.className} hero px-[10%] container mb-5  bg-[#F3F2F3] mx-auto md:flex items-center justify-between`}>
      <div className="text-content basis-1/2  ">
        <h3 className='text-3xl mb-5'>Classic Exlusive</h3>
        <h1 className="font-bold text-5xl mb-4">Women's Collection</h1>
        <h3 className='text-3xl mb-10'>UPTO 40% OFF</h3>
        <button className='btn px-5  py-3 rounded-md bg-black text-white flex items-center gap-5 '>Shop Now <FaLongArrowAltRight className='text-lg' /> </button>

      </div>
      <Image src={hero}  className='w-md'/>
     
    </div>
  )
}

export default Hero
