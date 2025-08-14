import { Jost } from 'next/font/google'
import ladySettingLogin from '../../../public/imges/mansettingsignup.png'
import logo from '../../../public/imges/logo.png'
import Image from 'next/image'
import React from 'react'
const josts = Jost({
  subsets:['latin']
})
const SignUp = () => {
  return (
     <div className={`${josts.className} login flex items-center justify-center w-[100%] h-[100vh] bg-[#F3F2F3]`}>
          <div className="container w-fit md:flex ">
            <div className="img relative">
              <Image src={ladySettingLogin} className='md:w-[470px] ' />
              <Image src={logo} className='absolute top-5 left-8 w-[100px]  ' />
            </div>
            <form action="" className='bg-white px-[50px] md:w-[400px] flex items-center justify-center flex-col'>
              <h3 className={`${josts.className} font-bold w-[100%] text-xl`}>Create New Account </h3>
              <p className={`${josts.className} w-[100%] text-[12px] text-[#A4A1AA] mb-4`} >Please enter details</p>
              <div className="input w-[100%]">
                <label htmlFor="" className='text-[10px] block w-[100%]'>First Name</label>
                <input type="email" className='mt-1 w-[100%]  text-sm
                placeholder-black placeholder:text-[12px] pl-3 leading-7
                outline-0 border border-black rounded-md p-2 h-[45px]' name="fname"
                 placeholder='Gul'  id="" />
              </div>
              <div className="input w-[100%] mt-3">
                <label htmlFor="" className='text-[10px] block w-[100%]'>Last Name</label>
                <input type="text" className='mt-1 w-[100%] 
                placeholder-black placeholder:text-[12px] pl-3 leading-loose 
                outline-0 border border-black rounded-md h-[45px] p-2' name="lname"
                 placeholder='Khan'  id="" />
              </div>
              <div className="input w-[100%] mt-3">
                <label htmlFor="" className='text-[10px] block w-[100%]'>Email Address</label>
                <input type="password" className='mt-1 w-[100%] 
                placeholder-black placeholder:text-[12px] pl-3 leading-loose 
                outline-0 border border-black rounded-md h-[45px] p-2' name="lname"
                 placeholder='gulkhan@gmail.com'  id="" />
              </div>
              <div className="input w-[100%] mt-3">
                <label htmlFor="" className='text-[10px] block w-[100%]'>Password</label>
                <input type="password" className='mt-1 w-[100%] font-semibold
                placeholder-black placeholder:text-[25px] pl-3 leading-loose 
                outline-0 border border-black rounded-md h-[45px] p-2' name="lname"
                 placeholder='················'  id="" />
              </div>
              <div className="input flex items-center justify-between w-[100%] mt-2">
            <p className='text-sm mt-2  flex items-center'>
              <input type="checkbox" className='mr-1 accent-black' name="remember" id="" />
              I agree to the  <span className="font-medium ml-1"> terms and conditions</span>
              </p>
          </div>
              <div className="input w-[100%] mt-8">
                <button className='w-[100%] h-[45px] rounded-md bg-[#131118] text-white font-light active:bg-gray-800' type="submit">Login</button>
              </div>
              {/* <div className="input">
                <label htmlFor="">Password</label>
                <input type="Password" name="password" placeholder='················' id="" />
              </div> */}
            </form>
          </div>
    
        </div>
  )
}

export default SignUp
