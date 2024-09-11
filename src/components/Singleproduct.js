import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
import Swal from 'sweetalert2'
const Singleproduct = () => {
    const { id } = useParams(); // Get the product ID from the URL parameters
    const productId = parseInt(id); // Convert it to an integer
    const location = useLocation();
    const product = location.state?.product;
    
    console.log(id);
    const [init,setInit] = useState(0)
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            images: [img1, img2, img3, img4],
            description: "Description of Product 1",
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            images: [img2white, img2black, img2blue, img2yellow],
            description: "Description of Product 2",
        },
        // Add more products as needed
    ];
    

    const selectedProduct = products.find((p) => p.id === productId); // Find the product by ID
  console.log(selectedProduct);
  const handleClick = () =>{
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product Added to cart",
        showConfirmButton: false,
        timer: 1500
      })
  }


    if (!selectedProduct) {
        return <div>Product not found</div>; // Handle if product is not found
    }

     return (
        <div className="h-screen text-primary mt-20 container px-20">
            <div className="py-10 flex flex-col space-y-6">
            <h1 >{selectedProduct.name}</h1>
            <p>{selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <div className="flex space-x-8 items-center">
             <img src={selectedProduct.images[0]} className="h-60 w-40" />
             <div>
                <div className="flex text-xl font-bold">
                    <button className="w-12 h-12 bg-white">-</button>
                    <button className="w-14 h-12 bg-white">{init}</button>
                    <button className="w-12 h-12 bg-white">+</button>
                </div>
                <div className="mt-3 py-2">
                    <button className="w-40 bg-primary text-white
                    py-2" onClick={handleClick}> ADD TO CART</button>
                </div>
             </div>
             </div>
            <div className="flex space-x-2 h-32 w-32">
                {selectedProduct.images.map((image, index) => (
                    <img key={index} src={image} alt={`${selectedProduct.name} ${index}`} width="200" />
                ))}
            </div>
            </div>
        </div>
    );
};

export default Singleproduct;
