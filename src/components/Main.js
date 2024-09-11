import React from 'react'
import Topdeal from './Topdeal'
import Newletter from './Newletter'
import video1 from '../images/video1.mp4'
const Main = () => {
  return (
    <div>
         <div className='relative rounded-xl overflow-hidden px-20'>
        <video width="100%" height='200' autoPlay loop muted className='w-full h-full object-cover'>
          <source src={video1} type="video/mp4" />
        </video>
        <div className='bg-black h-20 w-full absolute bottom-0'>
          {/* Overlay content */}
        </div>
      </div>
      <Topdeal />
      <Newletter />
    </div>
  )
}

export default Main