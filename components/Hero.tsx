"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const Hero = () => {
  return (
   <section className="min-h-[65vh] overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            🛍️ New Collection
          </span>

          <h1 className="mt-6 text-3xl font-bold leading-tight text-gray-900 md:text-6xl">
            Shop Smart,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Find Your Favorite Products
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600">
            Discover thousands of quality products with amazing deals.
            Enjoy a simple and fast online shopping experience.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now
            </Link>

            <Link
              href="/products"
              className="rounded-xl border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              View Collection
            </Link>
          </div>


          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-2xl font-bold">
                10k+
              </h3>
              <p className="text-gray-500">
                Happy Customers
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                500+
              </h3>
              <p className="text-gray-500">
                Products
              </p>
            </div>
          </div>

        </div>


        {/* Right Image */}
        <div className="relative flex justify-center">

          {/* Circle Background */}
          <div className="absolute h-80 w-80 rounded-full bg-blue-200 blur-3xl">
          </div>


          {/* Product Image Card */}
       {/* Product Image Card */}
{/* Product Image Card */}
<motion.div
  animate={{
    y: [0, -15, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative rounded-3xl p-8 shadow-xl"
>

  <Image
    src="/banner.jpg"
    width={450}
    height={450}
    alt="Shopping products"
    className="object-contain"
  />


  {/* Rating Card */}
  <div className="absolute -right-5 -top-0 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 px-8 py-7 text-white shadow-lg">
    ⭐ 4.9 Rating
  </div>


  {/* Discount Card */}
  <div className="absolute -bottom-8 -left-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 px-8 py-7 text-white shadow-lg">
    🔥 30% OFF
  </div>


</motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;