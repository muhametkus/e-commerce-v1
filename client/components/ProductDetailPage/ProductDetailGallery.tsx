"use client";
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ImageZoom from '../ui/ImageZoom';

const ProductDetailGallery = () => {
  const images = [
    "https://minimalin-demo.myshopify.com/cdn/shop/files/watch_1024x1024.png",
    "https://minimalin-demo.myshopify.com/cdn/shop/files/watch_1_1024x1024.png",
    "https://minimalin-demo.myshopify.com/cdn/shop/files/watch_2_1024x1024.png",
    "https://minimalin-demo.myshopify.com/cdn/shop/files/watch_3_1024x1024.png",
    "https://minimalin-demo.myshopify.com/cdn/shop/files/watch_4_1024x1024.png"
  ];
  const [activeImage, setActiveImage] = useState(images[0]);

  const activeImageHandler = (image: string) => {
    setActiveImage(image);
  };
  console.log(images.indexOf(activeImage));
  
  
  

  return (
    <div className='w-full'>
      <div className='w-full flex justify-center items-center'>
        {/* <img className='w-[90%] border-4 rounded-xl border-cyan-700 m-5 duration-300' src={activeImage} alt="Product Image"/> */}

        <ImageZoom productName={"Smart Watch"} imageURL={activeImage}/>
      </div>

      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-md mx-auto my-6"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center">

                <button key={index} onClick={() => activeImageHandler(image)}>
            <img className={`w-[150px] border-4 rounded-xl hover:border-cyan-700 duration-100 ${index==images.indexOf(activeImage)?"border-cyan-700":"border-[#eae4dd]"}`} src={image} alt={`Product Image ${index + 1}`}/>
          </button>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>


      {/*<div className='w-full mx-auto justify-center flex gap-3'>
        {images.map((image, index) => (
          <button key={index} onClick={() => activeImageHandler(image)}>
            <img className={`w-[150px] border-4 rounded-xl hover:border-cyan-700 duration-100 ${index==images.indexOf(activeImage)?"border-cyan-700":"border-[#eae4dd]"}`} src={image} alt={`Product Image ${index + 1}`}/>
          </button>
        ))}
      </div>*/}
    </div>
  );
}

export default ProductDetailGallery;