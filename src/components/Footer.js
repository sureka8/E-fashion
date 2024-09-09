import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='container px-10  py-10 h-screen  text-white'>
        <div className='bg-[#36454F] h-full rounded-md px-10 py-10  uppercase'>
            <p className='underline'>BACK TO TOP</p>
            <div className='grid grid-cols-4 mt-5 '>
                <div className='font-bold'>
                    <h1>about </h1>
                    <p className='text-xl mt-3'>E-Fashion</p>
                </div>
                <div >
                    <h1 className='font-bold'>contact us</h1>
                    <p className='mt-3 text-sm'>021-1234567</p>
                    <p className='mt-3 text-sm'>email@gmail.com</p>
                </div>
                <div>
                    <h1 className='font-bold'>follow us</h1>
                    <div className='flex space-x-2 mt-3'>
                    <div className='h-9 w-9 rounded-full bg-white text-black p-2 text-xl'><FaFacebookF /></div>
                    <div className='h-9 w-9 rounded-full bg-white text-black p-2 text-xl'><FaYoutube /></div>
                    <div className='h-9 w-9 rounded-full bg-white text-black p-2 text-xl'><FaInstagramSquare /></div>
                    <div className='h-9 w-9 rounded-full bg-white text-black p-2 text-xl'><FaLinkedin /></div>
                    </div>
                    </div>
                    <div className='row-span-2 bg-white rounded-md text-black px-10 py-5 '>
                        <p className='text-xl capitalize'>Join Our Community</p>
                        <p className='mt-3'>Be the first to know about new arrivals, sales, and promotions by subscribing to our newsletter today</p>
                        <input type='text' className='bg-gray-800 h-10 mt-3 rounded-md w-full px-3' placeholder='Enter Your Email Address'/>
                        <button className='bg-black w-full mt-3 rounded-md h-10'>
                            <p className='text-white'>SUBSCRIBE</p>
                        </button>
                    </div>
                    <div className='mt-10 '>
                    <h1 className='font-bold'>collections </h1>   
                    <ul className=' text-sm '>
                        <li className='py-2'>men</li>
                        <li className='py-2'>women</li>
                        <li className='py-2'>ACCESSORIES</li></ul> 
                    </div>
                    <div className='mt-10 '>
                    <h1 className='font-bold'>support</h1>   
                    <ul className=' text-sm '>
                        <li className='py-2'>HELP CENTER</li>
                        <li className='py-2'>SHIPPING & RETURNS</li>
                        <li className='py-2'>CONTACT US</li></ul> 
                    </div>
                    <div className='mt-10 '>
                    <h1 className='font-bold'>OUR COMPANY</h1>   
                    <ul className=' text-sm '>
                        <li className='py-2'>ABOUT US</li>
                        <li className='py-2'>JOIN TEAM PEPPER</li>
                        <li className='py-2'>PRIVACY POLICY</li></ul> 
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer