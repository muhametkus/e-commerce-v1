"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

type ProductProps = {
  product: {
    discount: boolean;
    nonDiscountedPrice: string;
    images: string[];
    productName: string;
    price: string;
    urlName: string;
  };
};


const ProductCard = ({ product }: ProductProps) => {
  const [imgHover, setImgHover] = useState(false);
  const [like, setLike] = useState(false);

  if (!product) {
    return null;
  }
  
  return (
    <Link href={`/product`}>
      <div
        className={`card w-72 mx-auto md:mx-0 shadow-xl duration-300 ${imgHover && "translate-y-[-20px]"}`}
        onMouseMove={() => setImgHover(true)}
        onMouseLeave={() => setImgHover(false)}
      >
        <figure className={`rounded-2xl duration-300`}>
          <img
            className="w-72 h-72 duration-300"
            src={imgHover ? product?.images[1] : product?.images[0]}
            alt={product.productName}
          />
          <span className="w-72 h-72 rounded-2xl p-4 b5g-slate-600 z-50 absolute flex flex-col justify-between">
            <div className="flex justify-between">
              <span><IoHeart className={`text-red-600 text-3xl ${!like && "hidden"}`} /></span>
              <span
                className={`bg-red-700 px-2 items-center h-[22px] rounded-sm text-xs text-[#eae4dd] font-bold  ${
                  product.discount ? "flex" : "hidden"
                }`}
              >
                İndirimde!
              </span>
            </div>
            <div
              className={`text-[#eae4dd] mx-auto gap-x-3 ${
                imgHover ? "flex" : "hidden"
              }`}
            >
              <button className="text-2xl bg-cyan-700 p-3 rounded-lg duration-300 hover:bg-[#eae4dd] hover:text-cyan-700 shadow-2xl" onClick={(e) => e.preventDefault()}>
                <MdOutlineShoppingCart />
              </button>
              <button
                className={`text-2xl bg-cyan-700 p-3 rounded-lg duration-300 hover:bg-[#eae4dd] hover:text-cyan-700 shadow-2xl`}
                onClick={(e) => { e.preventDefault(); setLike(!like) }}
              >
                {like ? <IoHeart /> : <FaRegHeart />}
              </button>
            </div>
          </span>
        </figure>
        <div className="card-body my-[-15px]">
          <h2 className="card-title text-lg text-center">
            {product.productName}
          </h2>
          <span className="mx-auto flex items-center gap-x-2">
            <span
              className={`mx-auto text-base font-semibold line-through text-gray-500 ${
                product.discount ? "flex" : "hidden"
              }`}
            >
              {product.nonDiscountedPrice}
            </span>
            <span className="text-2xl font-bold">{product.price}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
