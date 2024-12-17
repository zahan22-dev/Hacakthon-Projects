import React from 'react'
import { ImCross } from "react-icons/im";
export const TopHeader = () => {
  return (
    <>
    <div
    className='bg-[#000] w-full h-[38px] text-white flex justify-center items-center relative text-xs sm:text-sm'
    >
        <p
        className='text-[] font-light sm:text-[]]'>
            Sign up and get 30 off on your first order</p>
        <button
        className='ml-3 underline text- font-light'>
            Sign Up Now</button>
        <ImCross 
        className='absolute right-[50px] font-light hidden sm:block'/>
    </div>
    </>
  )
}
