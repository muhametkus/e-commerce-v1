import Link from "next/link";
import React from "react";
import { FaAngleDown, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="bg-[#eae4dd] w-full shadow-xl">
      <div className="navbar w-full lg:container px-2 xl:px-10 mx-auto">
        <div className="navbar-start">
          <div className="drawer drawer-start w-auto lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button cursor-pointer"
              >
                <RiMenu2Fill className="text-5xl text-cyan-700 rounded-lg p-2 duration-300 hover:bg-cyan-700 hover:text-[#eae4dd]" />
              </label>
            </div>
            <div className="drawer-side z-50 ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-[#eae4dd] rounded-r-xl text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          <Link href={"/"} className="w-[150px] ml-5 lg:ml-0">
            <img
              className="w-full"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trendyol_logo.svg/2560px-Trendyol_logo.svg.png"
              alt=""
            />
          </Link>
        </div>
        <div className="search hidden md:flex w-full px-5">
          <label className="input input-bordered hover:border-cyan-700 w-full rounded-3xl flex items-center gap-2">
            <input type="text" className="grow" placeholder="Ürün Ara" />
            <button className="text-xl bg-cyan-700 text-[#eae4dd] p-1 rounded-full duration-300 hover:scale-110">
              <IoSearch />
            </button>
          </label>
        </div>
        <div className="navbar-center hidden lg:flex px-5">
          <ul className="flex gap-x-5 xl:gap-x-10 px-1 text-base xl:text-lg items-center">
            <li className="hover:text-cyan-700 duration-300 cursor-pointer">
              <Link href={"/"} className="">
                Anasayfa
              </Link>
            </li>
            <li className="hover:text-cyan-700 duration-300 cursor-pointer">
              <Link href={"/"} className="">
                Fırsat Ürünler
              </Link>
            </li>
            <li
              tabIndex={0}
              role="button"
              className="bg-cyan-700 py-1 px-2 rounded-xl text-white hover:bg-cyan-600 duration-300 cursor-pointer dropdown dropdown-end"
            >
              <Link
                tabIndex={0}
                role="button"
                href={"/"}
                className="flex items-center gap-x-1"
              >
                <MdMenu className="text-2xl xl:text-3xl" />
                <span>Kategoriler</span>
                <FaAngleDown className="ml-3" />
              </Link>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
              >
                <li className="text-black ">
                  <a>Item 1</a>
                </li>
                <li className="text-black ">
                  <a>Item 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end 2xl:pr-0 pr-5 flex text-2xl gap-x-5">
          <button className="hover:text-cyan-700 duration-300">
            <FaRegHeart />
          </button>
          <button className="hover:text-cyan-700 duration-300">
            <VscAccount />
          </button>

          <div className="drawer drawer-end w-auto">
            <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-5"
                className="drawer-button cursor-pointer hover:text-cyan-700 duration-300"
              >
                <div className="badge bottom-4 left-4 absolute ">9</div>
                {/* absolute düzeni bozuyor */}
                <MdOutlineShoppingCart />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer-5"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 rounded-l-3xl text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
