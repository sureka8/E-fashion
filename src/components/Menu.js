import React from 'react'
import logo from '../images/woman.png'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Menu = () => {
  return (
    <nav className='bg-black py-2 text-primary fixed z-50 w-full top-0'>
        <div className='container px-20 flex items-center justify-between'>
            <div className='flex space-x-14 items-center'>
            <div className='flex items-center space-x-2'>
            <img src={logo} />
            <p className='text-2xl font-semibold text-primary '>E-Fashion</p>
            </div>
            <div>
                <ul className='flex uppercase space-x-5'>
                    <li>Home</li>
                    <li>Women's</li>
                    <li>Men's</li>
                    <li>Accessories</li>
                    <li>gifts cards</li>
                </ul>
            </div>
            </div>
            <div className='text-xl flex items-center space-x-3'>
                <IoSearch />
                <FaUser/>
                <FaCartShopping />
            </div>
        </div>

    </nav>
  )
}

export default Menu