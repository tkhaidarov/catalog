import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/types";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority
          />
        </div>
        <h2 className="text-lg font-semibold mb-1 line-clamp-2">
          {product.name}
        </h2>
        <p className="text-xl font-bold mt-auto">{product.price} $</p>
      </div>
    </Link>
  );
};

export default ProductCard;
