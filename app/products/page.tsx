"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { shoes } from "@/data/shoes";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredShoes = shoes
    .filter((shoe) => {
      const matchSearch = shoe.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || shoe.category === category;

      return matchSearch && matchCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });


  return (
    <main className="bg-gray-50 py-16">

      <div className="mx-auto w-11/12">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Shoes Collection
            </span>
          </h1>

          <p className="mt-4 text-gray-500">
            Find premium footwear that matches your style
          </p>
        </div>


        {/* Filter Card */}
        <div className="mb-12 rounded-3xl bg-white p-6 shadow-lg">

          <div className="mb-5 flex items-center gap-2">
            <SlidersHorizontal className="text-cyan-500" />

            <h2 className="text-xl font-bold">
              Filter Products
            </h2>
          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {/* Search */}
            <div className="relative">

              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />

              <input
                type="text"
                placeholder="Search shoes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border px-12 py-3 outline-none focus:border-cyan-500"
              />

            </div>


            {/* Category */}
            <select
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              className="rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
            >
              <option value="All">
                All Categories
              </option>

              <option value="Running">
                Running
              </option>

              <option value="Casual">
                Casual
              </option>

              <option value="Sports">
                Sports
              </option>

            </select>


            {/* Sort */}
            <select
              onChange={(e)=>setSort(e.target.value)}
              className="rounded-xl border px-4 py-3 outline-none focus:border-cyan-500"
            >
              <option value="">
                Sort Products
              </option>

              <option value="low">
                Price Low → High
              </option>

              <option value="high">
                Price High → Low
              </option>

            </select>

          </div>

        </div>


        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {
            filteredShoes.map((shoe)=>(
              <ProductCard
                key={shoe.id}
                shoe={shoe}
              />
            ))
          }

        </div>

      </div>

    </main>
  );
};

export default ProductsPage;