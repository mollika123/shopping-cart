"use client"

import Image from "next/image";
import { Shoe } from "@/types/shoe";
import { ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface ProductCardProps {
  shoe: Shoe;
}

const ProductCard = ({ shoe }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-cyan-700 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Image Section */}
      {/* Image Section */}
<div className="relative m-4 h-64 overflow-hidden rounded-2xl bg-gray-100">

  <Image
    src={shoe.image}
    alt={shoe.name}
    fill
    className="rounded-2xl object-cover transition duration-500 group-hover:scale-110"
  />


  {/* Category Badge */}
  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow">
    {shoe.category}
  </span>


  {/* Favorite */}
  <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl shadow hover:bg-red-50">
    ♡
  </button>

</div>


      {/* Content */}
      <div className="space-y-3 p-5">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            {shoe.name}
          </h2>

          <p className="text-lg font-bold text-white">
            ${shoe.price}
          </p>
        </div>


        <p className="text-sm text-white">
          {shoe.brand}
        </p>


        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">
            4.8
          </span>
          <span className="text-sm text-gray-400">
            (120)
          </span>
        </div>


        <p className="line-clamp-2 text-sm text-white">
          {shoe.description}
        </p>


        <div className="flex gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            {shoe.color}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            Size: {shoe.size[0]}+
          </span>
        </div>


        {/* Button */}
 <div className="mt-3 flex gap-3">

  <AddToCartButton shoe={shoe} />

  <Link
    href={`/products/${shoe.id}`}
    className="flex-1 rounded-xl border border-cyan-500 py-2.5 text-center font-semibold text-white transition hover:bg-cyan-500 hover:text-white"
  >
    View Details
  </Link>

</div>
      </div>
    </div>
  );
};

export default ProductCard;