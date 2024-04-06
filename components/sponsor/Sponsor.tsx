import React from 'react'

import { FaGooglePlus } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Sponsor() {
  return (
   <main>
      <div className='grid grid-cols-2 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-[24px] p-[50px] leading-7 mx-auto'>
        <div className='text-center w-52 h-28 grid place-content-center border-2 rounded-lg border-[#c9c9c9]'>
        <FaGooglePlus  className=' text-[60px] flex mx-auto'/>
        </div>
        <div className='text-center w-52 h-28 grid place-content-center border-2 rounded-lg border-[#c9c9c9]'>
        <FaSpotify  className=' text-[60px] flex mx-auto'/>
        </div>
        <div className='text-center w-52 h-28 grid place-content-center border-2 rounded-lg border-[#c9c9c9]'>
        <FaYoutube  className=' text-[60px] flex mx-auto'/>
        </div>
        <div className='text-center w-52 h-28 grid place-content-center border-2 rounded-lg border-[#c9c9c9]'>
        <FaFacebook  className=' text-[60px] flex mx-auto'/>
        </div>
        <div className='text-center w-52 h-28 grid place-content-center border-2 rounded-lg border-[#c9c9c9]'>
        <FaFacebookMessenger className=' text-[60px] flex mx-auto'/>
        </div>
        <div className='text-center w-52 h-28 grid place-content-center border-2 rounded-lg border-[#c9c9c9]'>
        <FaTwitter  className=' text-[60px] flex mx-auto'/>
        </div>
      </div>
      <p className='p-[20px] md:text-[20px] text-center sm:text-base lg:text-[26px] font-semibold mt-12'>TRENDING NOW</p>
      <hr className='bg-[#2b2b2b] border-none h-[1px] w-[50%] mx-auto'/>
   </main>
  )
}
