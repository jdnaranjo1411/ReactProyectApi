'use client'

import React from 'react'
import { useCartStore } from "./cartStore";
import Link from 'next/link';


export default function CartLink() {
const cartItems = useCartStore((state) => state.items)
console.log(cartItems)
  return (
    <Link href="/cart">
    <h1>Carrito<span>{cartItems.length}</span></h1>
    </Link>
  )
}
