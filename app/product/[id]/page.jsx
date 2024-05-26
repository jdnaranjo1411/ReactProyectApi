import BuyButton from "@/components/BuyButton";
import Link from "next/link";

export default async function ProductPage({ params }) {
  console.log(params);

  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return (
    <div className="container mx-auto p-4">
      <div className="product-detail flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="item-link text-blue-500 hover:underline mt-2 block text-center"
            >
              Volver
            </Link>
            <h1 className="text-2xl font-bold mb-4 text-center">
              {product.title}
            </h1>
          </div>

          <img
            className="w-1/2 h-auto object-contain"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 flex flex-col justify-center">
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-semibold">Precio: ${product.price}</p>
          <BuyButton productInfo={product} />
        </div>
      </div>
    </div>
  );
}
