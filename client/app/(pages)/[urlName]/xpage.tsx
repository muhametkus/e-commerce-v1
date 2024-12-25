/*'use client'
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { fetchProductData } from '@/lib/FetchProduct';


const page = () => {
  const dispatch = useAppDispatch();
  const { data: products, loading } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  const pathname = usePathname().replace(/^\/|\/$/g, '');

  return (
    <div>
      <h1>Product Name: {pathname}</h1>
      {loading && <p>Loading...</p>}
      {products.length > 0 && (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.urlName==pathname && (
                <div>
                  {product.productName}
                  <img src={product.images[0]} alt={product.productName} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default page;*/