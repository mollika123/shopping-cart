"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Shoe } from "@/types/shoe";

interface Props {
  shoe: Shoe;
}

const AddToCartButton = ({ shoe }: Props) => {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(shoe)}
      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 font-semibold text-white transition hover:opacity-90"
    >
     
      Add To Cart
    </button>
  );
};

export default AddToCartButton;