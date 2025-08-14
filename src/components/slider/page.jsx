'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import casual from '../../../public/imges/casualwear.png'
import ethnic from '../../../public/imges/ethnicwear.png'
import kids from '../../../public/imges/kidswear.png'
import western from '../../../public/imges/westernwear.png'
import Link from 'next/link'
const Slider = () => {
    const slider = useRef()
    const moveleft = ()=>{
        slider.current.scrollBy({
            left:-300,
            behavior:"smooth"
        })
    }
    const moveright = ()=>{
        slider.current.scrollBy({
            left:300,
            behavior:"smooth"
        })
    }
    return (
        <div className='slider container px-[10%] mx-auto mt-[70px] mb-[150px] font-semibold'>
            <div className="title flex items-center justify-between">
                <h3 className='text-4xl'>Shop by Categories</h3>
                <div className="btns flex items-center justify-between gap-6">
                    <i onClick={moveleft} className='p-5 bg-[#F3F2F3] rounded-sm text-lg'> <FaLongArrowAltLeft /></i>
                    <i onClick={moveright} className='p-5 bg-[#131118] rounded-sm text-lg '>   <FaLongArrowAltRight className='text-[#f0ecee]' /></i>
                </div>
            </div>
            {/* title of the slider and btns */}
            <div className="category-slider  mt-15 flex gap-x-5  overflow-x-scroll " ref={slider}>
              <Link href={'/casual'}>  <div className="card w-[250px] flex-shrink-0  h-[330px] bg-[#F3F2F3]    relative">
                    <Image src={casual} className='w-[100%] h-[100%] object-cover' />
                    <p className="text-xl text-[#131118] absolute w-[80%]
                     bg-[#ebe7e7de] bottom-4 rounded-lg p-2 text-center mx-6">Casual Wear</p>
                </div></Link>
                <div className="card w-[250px] flex-shrink-0 h-[330px] bg-[#F3F2F3]   relative">
                    <Image src={western} className='w-[100%] h-[100%] object-cover' />
                    <p className="text-xl text-[#131118] absolute w-[80%]
                     bg-[#ebe7e7de] bottom-4 rounded-lg p-2 text-center mx-6">Western Wear</p>
                </div>
                <div className="card flex-shrink-0 w-[250px] h-[330px] bg-[#F3F2F3]   relative">
                    <Image src={ethnic} className='w-[100%] h-[100%] object-cover' />
                    <p className="text-xl text-[#131118] absolute w-[80%]
                     bg-[#ebe7e7de] bottom-4 rounded-lg p-2 text-center mx-6">Ethnic Wear</p>
                </div>
                <div className="card w-[250px] flex-shrink-0 h-[330px] bg-[#F3F2F3]   relative">
                    <Image src={kids} className='w-[100%] h-[100%] object-cover' />
                    <p className="text-xl text-[#131118] absolute w-[80%]
                     bg-[#ebe7e7de] bottom-4 rounded-lg p-2 text-center mx-6">Kids Wear</p>
                </div>
        
            </div>
        </div>
    )
}

export default Slider
