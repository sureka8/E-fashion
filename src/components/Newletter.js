import React from 'react'
import img1 from '../images/slider1.jpg'
const Newletter = () => {
  return (
    <div className='h-auto text-primary  py-10'
   
    >
          <div
          className='py-20'
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/02/68/02/72/360_F_268027237_5dnxmVzkU0OGFhByf3qlGmpWKJ5Gs0Bo.jpg')`,
        backgroundSize: 'cover', // cover the entire div
        backgroundPosition: 'center', // center the image
        height: '60vh', // set the height to 100% of the viewport height
        width: '100%', // set the width to 100% of the container
      }}
    >
      <div className='flex flex-col justify-center items-center space-y-10'>
      <p className='text-black text-3xl text-center font-bold'>NEWS LETTER</p>
      <p className='text-black font-semibold text-xl text-center'>Be the first to know about new arrivals, sales, and promotions by subscribing to our newsletter today!</p>
      <div className='flex space-x-5'>
        <input type='text' className='rounded-md bg-gray-800 w-96 h-14 text-white' />
        <button className='bg-gray-800 text-white h-14 w-32 rounded-md'>SUBSCRIBE </button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Newletter