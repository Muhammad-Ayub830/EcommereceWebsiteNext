
import Image from 'next/image'
import React from 'react'
import logo from '../../../public/imges/logo.png'
import {   FaRegHeart, FaAngleDown} from 'react-icons/fa'
import {  LuShoppingBag,LuSearch } from 'react-icons/lu'
import { FaChevronDown } from "react-icons/fa6";
import { Fahkwang, Jost } from 'next/font/google'
import Link from 'next/link'
  const josts = Jost({
    subsets:['latin']
  })
const Navbar = () => {

  return (
    <nav className={` ${josts.className} container mx-auto flex w-[100%] items-center justify-between px-[10%] py-8`}>
     <div className="logo">
      <Image src={logo} className='w-[100px]' alt='img' />
     </div>
     <div className="links">
      <ul className='flex items-center justify-between gap-10'>
       <Link href='/'><li>Home</li></Link> 
      <Link href='/products'><li className=''>Products </li></Link> 
        <li>Our Story</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
     </div>
     <div className="btns flex text-xl items-center justify-between gap-5">
      <LuSearch className=''/>
      <FaRegHeart/>
      <LuShoppingBag />
      <button className='btn px-5  py-2 rounded-md bg-black text-white '>Login</button>
     </div>
    </nav>
  )
}

export default Navbar
