"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { shoes } from "@/data/shoes";

// ১. একটি সাধারণ Skeleton কার্ড কম্পোনেন্ট (যা দেখতে আপনার আসল কার্ডের মতো সাইজের হবে)
const SkeletonCard = () => (
  <div className="flex flex-col bg-slate-700/50 border border-slate-600 rounded-xl overflow-hidden h-[400px] animate-pulse">
    <div className="w-full h-48 bg-slate-600" />
    <div className="p-4 flex-1 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="h-6 bg-slate-600 rounded w-3/4" />
        <div className="h-4 bg-slate-600 rounded w-5/6" />
        <div className="h-4 bg-slate-600 rounded w-1/2" />
      </div>
      <div className="h-10 bg-slate-600 rounded w-full mt-4" />
    </div>
  </div>
);

const ProductsPage = () => {
  const [products, setProducts] = useState(shoes);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  
  // ২. লোডিং স্টেট যুক্ত করা হলো
  const [isLoading, setIsLoading] = useState(true);

  // প্রথমবার লোকাল স্টোরেজ থেকে ডেটা নিয়ে আসার সময় লোডিং হ্যান্ডেল করা
  useEffect(() => {
    setIsLoading(true);
    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts([
      ...shoes,
      ...savedProducts,
    ]);

    // একটু ডিলে দিয়ে লোডিং ফলস করা যাতে স্কেলিটনটি দেখা যায়
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // ৩. ফিল্টারিং বা সোর্টিং স্টেট পরিবর্তন হলে ক্ষণস্থায়ী লোডিং ট্রিগার করা
  useEffect(() => {
    // মাউন্ট হওয়ার প্রথমবারে অলরেডি ওপরের useEffect লোড করছে, তাই চেক করা হচ্ছে
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // ৪০০ মিলি-সেকেন্ডের জন্য স্কেলিটন দেখাবে

    return () => clearTimeout(timer);
  }, [search, category, sort]); // এই ৩টির যেকোনো একটি পরিবর্তন হলেই লোডিং শুরু হবে

  // ফিল্টার এবং সোর্টিং লজিক (আপনার আগের মতোই আছে)
  const filteredProducts = products
    // Search by name
    .filter((product) =>
      product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    )
    // Category filter
    .filter((product) =>
      category === "All"
        ? true
        : product.category === category
    )
    // Price sorting
    .sort((a, b) => {
      if (sort === "low") {
        return a.price - b.price;
      }
      if (sort === "high") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <main className="min-h-screen bg-cyan-800 py-16">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h1 className="mb-10 text-4xl font-bold text-white">
          All Products
        </h1>

        {/* Search / Filter / Sort Controls */}
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg px-4 py-3 bg-white outline-none"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg px-4 py-3 bg-white outline-none"
          >
            <option value="All">All Category</option>
            <option value="Running">Running</option>
            <option value="Sports">Sports</option>
            <option value="Casual">Casual</option>
            <option value="Basketball">Basketball</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Skate">Skate</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg px-4 py-3 outline-none bg-white"
          >
            <option value="">Sort By Price</option>
            <option value="low">Price Low - High</option>
            <option value="high">Price High - Low</option>
          </select>
        </div>

        {/* ৪. শর্তসাপেক্ষে (Conditional) Skeleton অথবা Products Grid রেন্ডার করা */}
        {isLoading ? (
          // লোড হওয়ার সময় ৬টি ডামি স্কেলিটন কার্ড দেখাবে
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((shoe) => (
              <ProductCard key={shoe.id} shoe={shoe} />
            ))}
          </div>
        ) : (
          <h2 className="text-center text-xl text-white">
            No products found
          </h2>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;