import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing quality and super comfortable! The delivery was fast and the shoes look exactly like the pictures.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Sneaker Lover",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "One of the best online shoe stores I've ever used. Great customer service and premium products.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Fitness Trainer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Perfect running shoes! They're lightweight, stylish, and very comfortable for everyday workouts.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-600">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-500">
            Trusted by thousands of happy customers around the world.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl border border-gray-100 bg-cyan-700 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* User */}
              <div className="flex items-center gap-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-gray-400">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-300">
                    {review.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 leading-7 text-gray-300">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;