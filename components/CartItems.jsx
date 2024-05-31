"use client";

import React from "react";
import { useCartStore } from "./cartStore";
import { toast } from "sonner";

export default function CartItems({ items }) {
  const cartItems = useCartStore((state) => state.items);
  const getTotalCost = useCartStore((state) => state.getTotalCost);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const Complete = async () => {
    if (cartItems < 1) {
      toast.warning("No hay productos en el carrito");
      return;
    }
    await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify(cartItems),
    });
    toast.success("Compra completada");
    clearCart();
  };

  return (
    <>
      <div className="cart__items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart__item border p-4 mb-4 rounded-lg">
            <h2 className="cart__item-title text-lg font-bold">{item.title}</h2>
            <p className="cart__item-price text-gray-600">${item.price}</p>
            <img
              className="cart__item-image h-20"
              src={item.image}
              alt={item.title}
            />
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div>
        <p className="text-lg font-bold">Total: ${getTotalCost()}</p>
        <button
          onClick={() => clearCart()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Limpiar carrito
        </button>
        <button
          onClick={() => Complete()}
          className="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          completar compra
        </button>
      </div>
    </>
  );
}
