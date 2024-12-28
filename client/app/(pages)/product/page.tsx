import React from "react";
import ProductDetailGallery from "@/components/ProductDetailPage/ProductDetailGallery";
import ProductInfo from "@/components/ProductDetailPage/ProductInfo";

const page = () => {
  return (
    <div className="w-[90%] rounded-xl mx-auto bg-[#eae4dd] mb-8 p-5">
      <div className="w-full flex h-full flex-col">
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2"><ProductDetailGallery/></div>
          <div className="w-full md:w-1/2"><ProductInfo/></div>
        </div>
        
        <div className="w-full">
                desc- yorumlar - poltika vs
        </div>

        <div className="w-full">
            aynı kategorideki benzer ürünler
        </div>

      </div>

    </div>
  );
};

export default page;
