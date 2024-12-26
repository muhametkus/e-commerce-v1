"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/lib/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p className="text-center">Yükleniyor...</p>;
  if (error) return <p className="text-center text-red-500">Hata: {error.message}</p>;

  return (
    <div className="w-[90%] mx-auto flex flex-wrap gap-y-7 gap-2 justify-center md:justify-between mb-5">
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
