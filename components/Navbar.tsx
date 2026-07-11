"use client"

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
   const { cart } = useCart();
  return (
    <nav className="border-b bg-cyan-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-blue-600"
        >
       <h1 className="text-2xl font-extrabold tracking-wide text-white">
                KICK<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">HUB</span>
              </h1>
        </Link>


        {/* Menu */}
        <ul className="flex items-center gap-8 text-white font-bold">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
          </li>

          <li>
            <Link href="/items/add" className="hover:text-cyan-200 transition">
  Add Product
</Link>
          </li>
          <li>
                  <Link 
            href="/cart"
            className="relative"
          >
            <ShoppingCart size={25}/>


            {
              cart.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
                  {cart.length}
                </span>
              )
            }

          </Link>
          </li>
        </ul>


        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-md border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;