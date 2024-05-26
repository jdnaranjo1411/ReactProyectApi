"use client";
import React from "react";
import { useCartStore } from "./cartStore";
import { toast } from "sonner";

export default function BuyButton({ productInfo }) {
const addToCart = useCartStore((state) => state.addToCart)
const handleBuy = () => {
    addToCart(productInfo)
    toast.success("Producto añadido al carrito")
    }
    return (
    <button onClick={handleBuy} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Comprar
    </button>
  );
}
