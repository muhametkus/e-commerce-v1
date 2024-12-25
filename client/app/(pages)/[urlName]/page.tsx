"use client";
import React from 'react'
import { usePathname } from 'next/navigation';

const pathname = usePathname().replace(/^\/|\/$/g, '');

const page = () => {
  return (
    <div>{pathname}</div>
  )
}

export default page