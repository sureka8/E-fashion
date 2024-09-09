import React ,{useState}from 'react'
import img1 from '../images/products/5.jpg'
import img2 from '../images/products/blackimg1.jpg'
import img3 from '../images/products/blueimg1.jpg'
import img4 from '../images/products/yellowimg1.jpg'
import img2white from '../images/products/48.jpg'
import img2black from '../images/products/img2black.jpeg'
import img2blue from '../images/products/img2blue.jpg'
import img2yellow from '../images/products/img2yellow.jpg'
import img4white from '../images/products/img4white.jpg'
import img4black from '../images/products/img4black.jpg'
import img4yellow from '../images/products/img4yellow.jpg'
import img4blue from '../images/products/img4blue.jpg'
import img4pink from '../images/products/img4pink.jpg'
import img5white from '../images/products/img5white.jpg'
import img5black from '../images/products/img5black.jpg'
import img5green from '../images/products/img5green.jpg'
import img5cyn from '../images/products/img5cyn.jpg'

import img6white from '../images/products/img6white.jpg'
import img6black from '../images/products/img6black.jpg'
import img6blue from '../images/products/img6blue.jpg'
import img6pink from '../images/products/img6pink.jpg'
import img6purple from '../images/products/img6purple.jpg'
import img6red from '../images/products/img6red.jpg'

import img7black from '../images/products/img7black.jpg'
import img7blue from '../images/products/img7blue.jpg'
import img7gray from '../images/products/img7gray.jpg'
import img7slate from '../images/products/img7slate.jpg'

import img8white from '../images/products/img8white.jpg'
import img8black from '../images/products/img8black.jpg'
import img8blue from '../images/products/img8blue.jpg'
import img8pink from '../images/products/img8pink.jpg'
import img8purple from '../images/products/img8purple.jpg'

import img9white from '../images/products/img9white.jpg'
import img9black from '../images/products/img9black.jpg'
import img9blue from '../images/products/img9blue.jpg'
import img9pink from '../images/products/img9pink.jpg'
import img9red from '../images/products/img9red.jpg'

const Topdeal = () => {
    const [selectedImage, setSelectedImage] = useState(img1);
    const [selectedImage2, setSelectedImage2] = useState(img2white);
    const [selectedImage4,setselectedImage4] = useState(img4white);
    const [selectedImage5,setSelectedImage5] = useState(img5white)
    const [selectedImage6,setSelectedImage6] = useState(img6white)
    const [selectedImage7,setSelectedImage7] = useState(img7black)
    const [selectedImage8,setSelectedImage8] = useState(img8white)
    const [selectedImage9,setSelectedImage9] = useState(img9white)
  return (
    <div className='h-auto container px-20'> 
    <h2 className='text-center text-4xl font-semibold text-primary py-5 uppercase'> Top Deals</h2>
    <div className='grid grid-cols-4 gap-10 mt-3'>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage}  className='rounded-lg h-full w-full  '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
              <div 
                className='bg-white h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage(img1)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage(img2)}
              ></div>
              <div 
                className='bg-blue-900 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage(img3)}
              ></div>
              <div 
                className='bg-amber-200 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage(img4)}
              ></div>
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage2}  className='rounded-lg h-full  w-full '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
              <div 
                className='bg-white h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage2(img2white)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage2(img2black)}
              ></div>
              <div 
                className='bg-blue-900 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage2(img2blue)}
              ></div>
              <div 
                className='bg-amber-200 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage2(img2yellow)}
              ></div>
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage4}  className='rounded-lg h-full  w-full '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
              <div 
                className='bg-white h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setselectedImage4(img4white)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setselectedImage4(img4black)}
              ></div>
              <div 
                className='bg-blue-900 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setselectedImage4(img4blue)}
              ></div>
              <div 
                className='bg-orange-100 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setselectedImage4(img4yellow)}
              ></div>
               <div 
                className='bg-red-100 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setselectedImage4(img4pink)}
              ></div>
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage5}  className='rounded-lg h-full  w-full '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
              <div 
                className='bg-white h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage5(img5white)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage5(img5black)}
              ></div>
              <div 
                className='bg-teal-300 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage5(img5green)}
              ></div>
              <div 
                className='bg-cyan-900 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage5(img5cyn)}
              ></div>
             
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage6}  className='rounded-lg h-full  w-full object-fit '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
              <div 
                className='bg-white h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage6(img6white)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage6(img6black)}
              ></div>
              <div 
                className='bg-blue-950 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage6(img6blue)}
              ></div>
              <div 
                className='bg-pink-700 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage6(img6pink)}
              ></div>
                <div 
                className='bg-purple-900 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage6(img6purple)}
              ></div>
               <div 
                className='bg-red-900 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage6(img6red)}
              ></div>
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage7}  className='rounded-lg h-full  w-full '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
            
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage7(img7black)}
              ></div>
              <div 
                className='bg-blue-950 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage7(img7blue)}
              ></div>
              <div 
                className='bg-stone-600 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage7(img7gray)}
              ></div>
                <div 
                className='bg-stone-400 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage7(img7slate)}
              ></div>
              
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage8}  className='rounded-lg h-full  w-full '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
        <div 
                className='bg-white border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage8(img8white)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage8(img8black)}
              ></div>
              <div 
                className='bg-blue-950 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage8(img8blue)}
              ></div>
              <div 
                className='bg-pink-500 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage8(img8pink)}
              ></div>
                <div 
                className='bg-purple-400 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage8(img8purple)}
              ></div>
              
            </div>
        </div>
     
        </div>
        <div className='h-auto py-3 text-primary'>
        <div className='h-[450px]  rounded-lg '>
            <img src={selectedImage9}  className='rounded-lg h-full  w-full '/>
        </div>
        <div className='flex flex-col space-y-1 mt-3'>
        <p className=' '>Koi Graphic Tee</p>
        <p className='text-xl font-bold'>Rs 3,400.00</p>
        <div className='flex space-x-3'>
        <div 
                className='bg-white border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() =>setSelectedImage9(img9white)}
              ></div>
              <div 
                className='bg-black border-[1px] border-slate-50 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() =>setSelectedImage9(img9black)}
              ></div>
              <div 
                className='bg-blue-950 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() =>setSelectedImage9(img9blue)}
              ></div>
              <div 
                className='bg-pink-300 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() =>setSelectedImage9(img9pink)}
              ></div>
                <div 
                className='bg-pink-950 h-5 w-5 rounded-full cursor-pointer' 
                onClick={() => setSelectedImage9(img9red)}
              ></div>
              
            </div>
        </div>
     
        </div>

    </div>
    </div>
  )
}

export default Topdeal