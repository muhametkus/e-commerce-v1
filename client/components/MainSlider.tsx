import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MainSlider = () => {
  return (
    <Carousel className="bg-cyan-700 rounded-2xl w-[95%] lg:w-[90%] text-white mx-auto">
      <CarouselContent>
        <CarouselItem className="tracking-in-expand-fwd-bottom flex flex-col lg:flex-row"><img className="duration-500 hover:scale-110" src="https://minimalin-demo.myshopify.com/cdn/shop/files/slide_-_600_x_600_5_600x.png" alt="" />
        <span className="tracking-in-expand-fwd-bottom gap-y-2 lg:gap-y-5 flex flex-col justify-center mr-5  pl-10 lg:pl-0">
        <p className="text-2xl xl:text-4xl">Çocuk Kıyafetlerinde</p>
        <p className="text-4xl xl:text-6xl">BÜYÜK</p>
        <p className="text-6xl xl:text-8xl">KAMPANYA!</p>
        <button className="btn bg-[#eae4dd] text-cyan-700 w-48 uppercase mx-auto lg:mx-0 my-5 lg:my-0">ÜRÜNLERİ İNCELE</button>
        
        </span>
        

        </CarouselItem>
        <CarouselItem><div className="tracking-in-expand-fwd-bottom">selam</div></CarouselItem>
        <CarouselItem>son</CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hover:scale-150 border-0 rounded-none hover:bg-transparent hover:text-white"/>
      <CarouselNext className="hover:scale-150 border-0 rounded-none hover:bg-transparent hover:text-white"/>
    </Carousel>
  );
};

export default MainSlider;
