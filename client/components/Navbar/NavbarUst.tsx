"use client";
import React, { useState } from "react";
import LangSelect from "../LangSelect";
import ThemeSelect from "../ThemeSelect";
import Link from "next/link";

const NavbarUst = () => {
    const telefon = "0 216 999 99 99";
  return (
    <div className="bg-cyan-700 w-full flex items-center px-5  lg:px-20 py-1 text-[#eae4dd]">
      <div className="flex justify-between w-full lg:container mx-auto">
      <div className="flex gap-x-5 items-center"><LangSelect />
      <ThemeSelect /></div>
      <div className="flex gap-x-3 items-center ">
            <a className="text-base text-[#eae4dd] duration-300 hover:text-cyan-50" href={`tel:${telefon}`}>{telefon}</a>
            <Link href={'/iletisim'} className="hidden md:flex text-[#eae4dd] duration-300 hover:text-cyan-50">İletişim</Link>
            <Link href={'/SSS'} className="hidden md:flex text-[#eae4dd] duration-300 hover:text-cyan-50">SSS</Link>
      </div>
      </div>
    </div>
  );
};

export default NavbarUst;
