"use client"

import Image from "next/image";
import { Shoe } from "@/types/shoe";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  shoe: Shoe;
}

const ProductCard = ({ shoe }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Image Section */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={shoe.image}
          alt={shoe.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-1 text-sm font-medium text-gray-700 shadow">
          {shoe.category}
        </span>

        {/* Favorite */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow hover:bg-red-50">
          ♡
        </button>
      </div>


      {/* Content */}
      <div className="space-y-3 p-5">

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {shoe.name}
          </h2>

          <p className="text-lg font-bold text-blue-600">
            ${shoe.price}
          </p>
        </div>


        <p className="text-sm text-gray-500">
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


        <p className="line-clamp-2 text-sm text-gray-600">
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
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 py-3 font-semibold text-white transition hover:opacity-90">
          <ShoppingCart size={20} />
          Add To Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;