"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showMore } from "@/store/productSlice";
import { RootState } from "@/store";
import ProductCard from "@/app/components/ProductCard";

const Page = () => {
  const dispatch = useDispatch();
  const { visibleCount, products } = useSelector(
    (state: RootState) => state.products,
  );
  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center md:text-left">
        Каталог товаров
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="flex justify-center mt-8 md:mt-10">
          <button
            onClick={() => dispatch(showMore())}
            className="cursor-pointer px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 text-base md:text-lg font-medium shadow-md hover:shadow-lg"
          >
            Показать больше
          </button>
        </div>
      )}
    </main>
  );
};

export default Page;
