"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { shoes } from "@/data/shoes";
import { Star, Tag, Send } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ProductDetailsPage = ({ params }: ProductDetailsProps) => {
  const [shoe, setShoe] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // রিভিউ সেকশনের জন্য স্টেটসমূহ
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewerName, setReviewerName] = useState("");
  const [reviewComment, setReviewComment] = useState("");
  const [userRating, setUserRating] = useState(5);

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true);
      const { id } = await params;

      const savedProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
      );

      const allProducts = [...shoes, ...savedProducts];

      const product = allProducts.find(
        (item) => item.id.toString() === id
      );

      setShoe(product);

      // লোকাল স্টোরেজ থেকে রিভিউ লোড করা
      if (product) {
        const savedReviews = JSON.parse(
          localStorage.getItem(`reviews_${product.id}`) || "[]"
        );
        
        // যদি ডাটাবেজ/লোকালস্টোরেজে কোনো রিভিউ না থাকে, তবে ২টি ডিফল্ট রিভিউ সেট হবে
        if (savedReviews.length === 0) {
          const defaultReviews: Review[] = [
            {
              name: "Rahat Chowdhury",
              rating: 5,
              comment: "Extremely comfortable! The sole is very soft and perfect for running.",
              date: "2026-07-10",
            },
            {
              name: "Anika Rahman",
              rating: 4,
              comment: "Great build quality. Fits perfectly, but delivery took an extra day.",
              date: "2026-07-12",
            },
          ];
          localStorage.setItem(`reviews_${product.id}`, JSON.stringify(defaultReviews));
          setReviews(defaultReviews);
        } else {
          setReviews(savedReviews);
        }
      }

      setTimeout(() => setIsLoading(false), 500);
    };

    getProduct();
  }, [params]);

  // নতুন রিভিউ সাবমিট করার ফাংশন
  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewComment.trim() || !shoe) return;

    const newReview: Review = {
      name: reviewerName,
      rating: userRating,
      comment: reviewComment,
      date: new Date().toISOString().split("T")[0],
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${shoe.id}`, JSON.stringify(updatedReviews));

    // ইনপুট ফিল্ড রিসেট করা
    setReviewerName("");
    setReviewComment("");
    setUserRating(5);
  };

  // ১. পেজ লোডিং স্কেলিটন (Shimmer Effect)
  if (isLoading || !shoe) {
    return (
      <main className="bg-cyan-800 py-16 min-h-screen flex items-center justify-center">
        <div className="mx-auto grid w-11/12 max-w-7xl gap-12 lg:grid-cols-2 animate-pulse w-full">
          {/* ইমেজ প্লেসহোল্ডার */}
          <div className="rounded-3xl bg-slate-700/40 border border-slate-600/30 h-[350px] md:h-[500px]" />
          
          {/* বিবরণী প্লেসহোল্ডার */}
          <div className="space-y-6">
            <div className="h-6 bg-slate-700/40 rounded w-1/4" />
            <div className="h-10 bg-slate-700/40 rounded w-3/4" />
            <div className="h-6 bg-slate-700/40 rounded w-1/3" />
            <div className="h-24 bg-slate-700/40 rounded w-full" />
            <div className="h-32 bg-slate-700/40 rounded w-full" />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-cyan-800 py-16 min-h-screen text-white">
      <div className="mx-auto w-11/12 max-w-7xl">
        
        {/* ২. প্রোডাক্ট ইমেজ এবং ডিটেইলস গ্রিড */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* ইমেজ কন্টেইনার (Responsive Height ফিক্সড) */}
          <div className="rounded-3xl border border-cyan-700/30 bg-cyan-900/40 p-6 shadow-xl flex items-center justify-center h-[350px] md:h-[500px] relative overflow-hidden">
            <div className="relative h-full w-full">
              <Image
                src={shoe.image}
                alt={shoe.name}
                fill
                priority
                className="rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* ডিটেইলস কন্টেন্ট */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400">
                <Tag size={12} /> {shoe.brand}
              </span>

              <h1 className="mt-4 text-4xl font-bold text-slate-100">
                {shoe.name}
              </h1>

              {/* রেটিং ওভারভিউ */}
              <div className="mt-4 flex items-center gap-2">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-slate-200">
                  {shoe.rating || "4.8"}
                </span>
                <span className="text-sm text-slate-400">
                  ({reviews.length} Global Reviews)
                </span>
              </div>

              <p className="mt-6 text-4xl font-extrabold text-cyan-400">
                ${shoe.price}
              </p>

              <p className="mt-6 leading-relaxed text-slate-300 text-base">
                {shoe.description}
              </p>

              {/* স্পেসিফিকেশনস টেবিল (ডার্ক থিম কনসিস্টেন্ট) */}
              <div className="mt-8 rounded-2xl bg-cyan-950/50 border border-cyan-900/40 p-6 shadow-md">
                <h2 className="mb-4 text-lg font-bold text-slate-100 border-b border-cyan-800 pb-2">
                  Specifications
                </h2>
                <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-300">
                  <p className="font-semibold text-slate-400">Category:</p>
                  <p>{shoe.category}</p>

                  <p className="font-semibold text-slate-400">Color:</p>
                  <p>{shoe.color || "Standard"}</p>

                  <p className="font-semibold text-slate-400">Brand:</p>
                  <p>{shoe.brand}</p>
                  
                  <p className="font-semibold text-slate-400">Availability:</p>
                  <p className="text-emerald-400 font-semibold">In Stock</p>
                </div>
              </div>

              {/* সাইজ সিলেক্টর */}
              <div className="mt-8">
                <h2 className="mb-3 text-lg font-bold text-slate-100">
                  Select Size
                </h2>
                <div className="flex flex-wrap gap-3">
                  {(shoe.size || [38, 39, 40, 41, 42, 43]).map((size: number) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-xl border px-5 py-3 font-semibold transition text-sm ${
                        selectedSize === size
                          ? "bg-cyan-400 border-cyan-400 text-cyan-950 shadow-lg shadow-cyan-400/20"
                          : "border-cyan-700/50 hover:border-cyan-400 text-slate-200 hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* কার্ট বাটন */}
            <div className="mt-10">
              <AddToCartButton shoe={{ ...shoe, selectedSize }} />
            </div>
          </div>

        </div>

        {/* ৩. কাস্টমার রিভিউ সেকশন (অ্যাসাইনমেন্ট ৫ রিকোয়ারমেন্ট) */}
        <div className="mt-20 border-t border-cyan-700/40 pt-16">
          <h2 className="text-2xl font-bold text-slate-100 mb-8">Customer Reviews</h2>

          <div className="grid gap-8 lg:grid-cols-3">
            
            {/* কলাম ১: রিভিউ ইনপুট ফর্ম */}
            <div className="bg-cyan-950/50 border border-cyan-900/40 p-6 rounded-2xl shadow-md h-fit">
              <h3 className="text-lg font-bold text-slate-100 mb-4">Write a Review</h3>
              
              <form onSubmit={handleReviewSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-cyan-900/40 border border-cyan-800/80 rounded-xl px-4 py-2.5 text-white outline-none focus:border-cyan-400 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Rating</label>
                  <select
                    value={userRating}
                    onChange={(e) => setUserRating(Number(e.target.value))}
                    className="w-full bg-cyan-900/40 border border-cyan-800/80 rounded-xl px-4 py-2.5 text-white outline-none focus:border-cyan-400 text-xs"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                    <option value={3}>⭐⭐⭐ (3/5)</option>
                    <option value={2}>⭐⭐ (2/5)</option>
                    <option value={1}>⭐ (1/5)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">Comment</label>
                  <textarea
                    required
                    rows={3}
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Share your experience..."
                    className="w-full bg-cyan-900/40 border border-cyan-800/80 rounded-xl px-4 py-2.5 text-white outline-none focus:border-cyan-400 text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-cyan-950 font-bold py-2.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-xs shadow-lg shadow-cyan-400/10"
                >
                  <Send size={14} /> Submit Review
                </button>
              </form>
            </div>

            {/* কলাম ২ ও ৩: রিভিউ হিস্ট্রি লিস্ট */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold text-slate-100 mb-4">
                Recent Reviews ({reviews.length})
              </h3>
              
              {reviews.length === 0 ? (
                <p className="text-slate-400 text-sm">No reviews yet. Be the first to share!</p>
              ) : (
                <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2 custom-scrollbar">
                  {reviews.map((rev, index) => (
                    <div key={index} className="bg-cyan-950/30 border border-cyan-900/30 p-5 rounded-2xl">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm">{rev.name}</h4>
                          <div className="flex gap-1 mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                className={`${
                                  i < rev.rating
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-slate-600"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-xs text-slate-400">{rev.date}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed mt-3">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default ProductDetailsPage;