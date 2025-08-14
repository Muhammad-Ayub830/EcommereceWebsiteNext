import Image from 'next/image'
import React from 'react'
import user1 from '../../../public/imges/user-1.png'
import user2 from '../../../public/imges/user-2.png'
import user3 from '../../../public/imges/user-3.png'
import user4 from '../../../public/imges/mansettingsignup.png'
const  InstaStory = () => {
  return (
    <div className='container mx-auto px-[10%] mb-[100px]'>
      <div className=' text-center mb-20 text-5xl '>Our Instagram Stories</div>
      <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
       <div className=" h-[350px] bg-amber-400">
          <Image src={user1 } className='w-[100%] h-[100%] object-cover' />
       </div>
       <div className=" h-[350px] bg-amber-400">
          <Image src={user2 } className='w-[100%] h-[100%] object-cover' />
       </div>
       <div className=" h-[350px] bg-amber-400">
          <Image src={user3 } className='w-[100%] h-[100%] object-cover' />
       </div>
       <div className=" h-[350px] bg-amber-400">
          <Image src={user4 } className='w-[100%] h-[100%] object-fit' />
       </div>
     
      </div>
    </div>
  )
}

export default InstaStory
