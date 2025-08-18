import React from 'react'
import { FaCheck } from 'react-icons/fa6'
// app/loading.js  (App Router example)

export default function loading() {
    
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100%] ">
           <div className="success-wrapper w-fit  ">
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
       </div>
      
  )
}
