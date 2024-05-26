"use client"

import React from 'react';

export default function ProductDetail({ product }) {
  if (!product) return <div>Cargando...</div>;

  return (
    <div className="product-detail max-w-4xl mx-auto">
      <img src={product.image} alt={product.title} className="product-detail__image w-full h-96 object-cover mb-4" />
      <h1 className="product-detail__title text-3xl font-bold mb-2">{product.title}</h1>
      <p className="product-detail__description text-gray-700 mb-4">{product.description}</p>
      <p className="product-detail__price text-xl font-bold">${product.price}</p>
    </div>
  );
}
