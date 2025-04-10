import { allProducts } from "@/lib/data";
import Image from "next/image";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  console.log(params.productId);
  const productId = Number(params.productId);
  console.log(productId);
  const product = allProducts.find((p) => p.id === productId);
  if (!product) {
    return <p>Товар не найден</p>;
  }
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold mb-6">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
