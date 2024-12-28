"use client"
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";

const ProductInfo = () => {
  const [pieces, setPieces] = useState(1);
  const [like, setLike] = useState(false);

  return (
    <div className="flex flex-col gap-y-5 mx-2 lg:mx-7">
      <h2 className="font-bold text-3xl">F. Ultimate Smart Watch</h2>
      <h3 className="flex my-7 gap-x-10 items-end">
        <span className="line-through font-semibold text-3xl text-gray-600">
          €55
        </span>
        <span className="text-5xl font-bold text-cyan-700">€45</span>
        <span>
          <Badge variant="destructive">İndirimde!</Badge>
        </span>
      </h3>
      <hr className="border-2 rounded-3xl border-cyan-700" />
      <p className="font-light text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        ratione aspernatur soluta consequatur officia voluptas aliquid neque
        numquam, cupiditate inventore qui harum, molestias, adipisci veniam quis
        culpa labore veritatis excepturi praesentium vel vero expedita? Illum.
      </p>
      <hr className="border-2 rounded-3xl border-cyan-700" />
      <div className="grid grid-cols-2 md:grid md:grid-cols-3 gap-3">
        
        <div className="flex border-2 col-span-1 h-full border-cyan-700">
          <button className="btn border-cyan-700 bg-cyan-700 text-xs flex justify-center items-center rounded-none text-white hover:bg-cyan-700" onClick={() => pieces>1&&setPieces(pieces - 1)}>
            <FaMinus className="duration-500 transition hover:scale-150"  />
          </button>
          <input
            className="w-full  text-center border-none hover:border-none"
            type="text"
            inputMode="numeric"
            value={pieces?pieces:1}
            onChange={(e) => setPieces(Number(e.target.value))}
          />
          <button className="btn border-cyan-700 bg-cyan-700 text-xs flex justify-center items-center text-white rounded-full hover:bg-cyan-700" onClick={() => pieces<500&&setPieces(pieces + 1)}>
            <FaPlus className="duration-500 transition hover:scale-150" />
          </button>
        </div>
        <button className="block w-full col-span-1 rounded bg-cyan-700 p-4 text-sm text-white font-medium transition hover:scale-105">
          Sepete Ekle
        </button>

        <button className="block col-span-2 md:col-span-1 rounded bg-cyan-700 p-4 text-sm text-white font-medium transition hover:scale-105">
          Satın Al
        </button>
      </div>
      <hr className="border-2 rounded-3xl border-cyan-700" />
      <div>
                      <button
                        className={`text-lg flex w-[280px] items-center justify-start text-white bg-cyan-700 p-3 rounded-lg duration-300 transition hover:scale-105`}
                        onClick={(e) => { e.preventDefault(); setLike(!like) }}
                      >
                        {like ? <span className="flex items-center gap-x-3 "><IoHeart className="text-red-700 text-3xl" /><p>Favori Ürünlerimden Çıkar</p></span> : <span className="flex items-center gap-x-3"><FaRegHeart className="text-3xl" /><p>Favori Ürünlerime Ekle</p></span>}
                        
                      </button>
                      
      </div>
    </div>
  );
};

export default ProductInfo;
