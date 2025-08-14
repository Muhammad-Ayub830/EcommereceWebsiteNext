'use client'
import React, { useEffect, useState } from 'react'
import ladySettingLogin from '../../../public/imges/otp.png'
import logo from '../../../public/imges/logo.png'
import Image from 'next/image'
import { Jost } from 'next/font/google'
import { FaCheck } from "react-icons/fa";
const josts = Jost({
    subsets: ['latin']
})
import { SlArrowLeft } from "react-icons/sl";
import Heart from '@/components/heart'

const Otp = () => {
    const [isSuccess, setIsSuccess] = useState(true);


    return (
        <div className={`${josts.className} login flex items-center justify-center w-[100%] h-[100vh] bg-[#F3F2F3]`}>

            <div className="container w-fit md:flex ">
                <div className="img relative">
                    <Image src={ladySettingLogin} className='md:w-[470px] ' />
                    {/* <Image src={logo} className='absolute top-5 left-8 w-[100px]  ' /> */}
                </div>
                <form action="" className='bg-white  px-[50px] md:w-[400px] flex items-center justify-center flex-col'>
                    <div className="icon mb-5 w-[100%] font-light text-sm flex items-center"><SlArrowLeft className='text-[12px] font-semibold mr-2' /> Back</div>
                    <h3 className={`${josts.className} font-bold w-[100%] text-2xl mb-1`}>Enter OTP</h3>
                    <p className={`${josts.className} w-[100%] text-[12px] text-[#A4A1AA] mb-5`} >
                        We have share a code of your registered email address
                        robertfox@example.com</p>

                    <div className="input flex items-center justify-between w-[100%]">
                        <input type="text" maxLength={1} className='h-10 p-1 text-center border w-10 outline-0 rounded-sm' />
                        <input type="text" maxLength={1} className='h-10 p-1 text-center border w-10 outline-0 rounded-sm' />
                        <input type="text" maxLength={1} className='h-10 p-1 border-gray-300  text-center border w-10 outline-0 rounded-sm' />
                        <input type="text" maxLength={1} className='h-10 p-1 border-gray-300  text-center border w-10 outline-0 rounded-sm' />
                        <input type="text" maxLength={1} className='h-10 p-1 border-gray-300 text-center border w-10 outline-0 rounded-sm' />
                    </div>

                    <div className="input w-[100%] mt-8">
                        <button onClick={() => setIsSuccess(true)} className='w-[100%] h-[45px] rounded-md bg-black text-white font-light active:bg-gray-800' type="submit">Login</button>
                    </div>

                </form>
            </div>
            {isSuccess && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50 ">
                    <div className="bg-white relative p-6  rounded-xl shadow-lg text-center w-[392px]">
                       
      <div className="success-wrapper">
      {/* Rings */}
      <span className="ringg"></span>
      <span className="ringg delay-1"></span>
      <span className="ringg delay-2"></span>

      {/* Fixed nucleus */}
      <div className="nucleus">
        <div className="inner">
          <FaCheck />
        </div>
      </div>
    </div>
                        {/* <div class="wave delay-1"></div>
                        <div class="wave delay-2"></div> */}
                        <h3 className={`${josts.className} font-bold w-[100%] text-xl mb-3 mt-5`}>Password Changed Successfully</h3>
                        <div className="icon mb-5 w-[100%] font-light text-sm "> Your password has been updated successfully</div>
                        <div className="input w-[100%] mt-8">
                            <button onClick={() => setIsSuccess(false)} className='w-[100%] h-[45px] rounded-md bg-black text-white font-light active:bg-gray-800' type="submit">Back to Login</button>
                        </div>
                    </div>
                </div>
            )}
        </div>


    )
}

export default Otp
