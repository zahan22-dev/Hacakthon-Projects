import React from 'react'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import Sheet2 from "@/components/Sheet2";
import NavMenu from "@/components/NavMenu"
const Header = () => {
  return (
    <header
    className='h-[90px] w-full flex justify-between items-center'>
      {/* Left  */}
      <div className='flex justify-between items-center md:pl-[150px]'>
        {/* Logo */}
        <Sheet2 />
      <h1 className='text-2xl sm:text-4xl font-extrabold md:font-bold'
      >SHOP.CO</h1>

      {/* Navbar */}
        <ul className='hidden md:block'>
          <li className='flex items-center space-x-5 ml-10 text-xl'>
            <NavMenu/>
            <Link href={""}>On Sale</Link>
            <Link href={""}>New Arrivals</Link>
            <Link href={""}>Brands</Link>
          </li>
        </ul>

      </div>
      {/* Right */}
    
        {/* Search input */}
        <div className='flex justify-start items-center md:w-[577px] h-[48px] bg-[#F0F0F0] rounded-[62px] ml-2 md: '>
        <FaSearch className='text-xl ml-2 hidden md:block'/>
        <input className='bg-[#F0F0F0] w-full h-full rounded-[62px] ml-2 hidden md:block' 
        type="text" placeholder='Seacrh items...' />
        </div>
        <div className='flex items-center mr-7 text-2xl space-x-7'>
        <FaSearch className='text-xl ml-2 block md:hidden'/>
        <FaShoppingCart/>
        <RiAccountCircleLine/>
        </div>
    </header>
  )
}

export default Header