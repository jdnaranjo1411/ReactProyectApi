import React from 'react';
import Link from 'next/link';
import BuyButton from './BuyButton';

export default function ProductList({ products }) {
  return (
    <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="product-list__item border p-4 rounded-lg">
          <div className='h-48 mb-4'>
            <img src={product.image} alt={product.title} className="product-list__item-image w-full h-full object-contain"/>
          </div>
          <h2 className="product-list__item-title text-lg font-bold mb-2">{product.title}</h2>
          <p className="product-list__item-price text-gray-600">${product.price}</p>
          <Link className="product-list__item-link text-blue-500 hover:underline mt-2 block" href="/product/[id]" as={`/product/${product.id}` }>
          Ver detalles
          </Link>
          <BuyButton productInfo={product}/>
        </div>
      ))}
    </div>
  );
}
