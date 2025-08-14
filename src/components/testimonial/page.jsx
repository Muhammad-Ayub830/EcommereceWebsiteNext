'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar } from 'react-icons/fa'
import woman1 from '../../../public/imges/ladyforgotpass.png'
const Testimonial = () => {
      const slider = useRef()
      const moveleft = ()=>{
          slider.current.scrollBy({
              left:-400,
              behavior:"smooth"
          })
      }
      const moveright = ()=>{
          slider.current.scrollBy({
              left:400,
              behavior:"smooth"
          })
      }
      
  return (
    <div className='container mx-auto px-[10%]  my-[120px] bg-[#F3F2F3] py-20'>
      <div className="  flex items-center justify-between mb-10" >
        <h3 className='text-4xl'>What our Customer Say's</h3>
        <div className="btns flex items-center justify-between gap-6">
          <i onClick={moveleft} className='p-5 bg-[#d8d4d8] rounded-sm text-lg'> <FaLongArrowAltLeft /></i>
          <i onClick={moveright} className='p-5 bg-[#131118] rounded-sm text-lg '>   <FaLongArrowAltRight className='text-[#f0ecee]' /></i>
        </div>
      </div>
      {/* title of the testimonial and btns */}
      <div className="testimonial flex items-center overflow-x-scroll gap-20" ref={slider}>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        <div className="card w-[450px] rounded-lg shrink-0 bg-amber-50 p-10">
          <div className="star flex mb-5">
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
            <FaStar className='text-amber-300'/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Ad natus cum ab delectus at nihil provident eaque omnis 
            excepturi beatae, quia nobis vitae, quidem culpa, modi
              numquam eveniet eius molestiae?
          </p>
          <div className="profile mt-5 flex items-center gap-5">
            <Image src={woman1} className='w-[50px] h-[50px] rounded-full' />
            <div className="name">
              <p className='name '>Shabana</p>
              <p className='role text-gray-500'>Model</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Testimonial
