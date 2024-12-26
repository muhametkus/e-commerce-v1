import React from "react";
import ProductDetailGallery from "@/components/ProductDetailPage/ProductDetailGallery";

const page = () => {
  return (
    <div className="w-[90%] rounded-xl mx-auto bg-[#eae4dd]">
      <div className="w-full flex h-full flex-col ">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2"><ProductDetailGallery/></div>
          <div className="w-full md:w-1/2 bg-red-700">bilgi kısmı - fiyat kısmı</div>
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
