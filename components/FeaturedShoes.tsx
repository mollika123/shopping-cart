import ProductCard from "./ProductCard";
import { shoes } from "@/data/shoes";
import Link from "next/link";

const FeaturedShoes = () => {
  const featuredShoes = shoes.slice(0, 4);

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Shoes
          </h2>

          <p className="mt-3 text-gray-500">
            Discover our latest collection of premium sneakers
            designed for comfort and style.
          </p>
        </div>


        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {
            featuredShoes.map((shoe) => (
              <ProductCard
                key={shoe.id}
                shoe={shoe}
              />
            ))
          }
        </div>


        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            href="/products"
            className="inline-block rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            View All Shoes
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedShoes;