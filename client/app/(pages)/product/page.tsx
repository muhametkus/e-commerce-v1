import React from "react";

const page = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="w-full flex h-full flex-col bg-stone-600">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 bg-blue-700">görsel</div>
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
