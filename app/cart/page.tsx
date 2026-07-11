"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();


  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-500">
          Your cart is empty 🛒
        </h1>
      </main>
    );
  }


  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto w-11/12 max-w-6xl">

        <h1 className="mb-10 text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Shopping Cart
        </h1>


        <div className="grid gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-5 lg:col-span-2">

            {cart.map((item,index) => (
              <div
              key={`${item.id}-${index}`}
                className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow"
              >

                {/* Image */}
                <div className="relative h-28 w-28">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>


                {/* Details */}
                <div className="flex-1">

                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-cyan-600 font-semibold">
                    ${item.price}
                  </p>


                  {/* Quantity */}
                  <div className="mt-4 flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="rounded-lg border p-2"
                    >
                      <Minus size={16}/>
                    </button>


                    <span className="font-bold">
                      {item.quantity}
                    </span>


                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="rounded-lg border p-2"
                    >
                      <Plus size={16}/>
                    </button>

                  </div>

                </div>


                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="rounded-full bg-red-100 p-3 text-red-500"
                >
                  <Trash2 size={20}/>
                </button>


              </div>
            ))}

          </div>


          {/* Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>


            <div className="mt-6 flex justify-between">
              <span>
                Total
              </span>

              <span className="text-xl font-bold text-cyan-600">
                ${totalPrice}
              </span>
            </div>


            <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white">
              Checkout
            </button>

          </div>


        </div>

      </div>
    </main>
  );
};


export default CartPage;