import Image from "next/image";
import { notFound } from "next/navigation";
import { shoes } from "@/data/shoes";
import { Star, ShoppingCart } from "lucide-react";

interface ProductDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const ProductDetailsPage = async ({ params }: ProductDetailsProps) => {
  const { id } = await params;

  const shoe = shoes.find((item) => item.id.toString() === id);

  if (!shoe) {
    notFound();
  }

  return (
    <main className="bg-gray-50 py-16">
      <div className="mx-auto grid w-11/12 max-w-7xl gap-12 lg:grid-cols-2">

        {/* Image */}
        <div className="overflow-hidden rounded-3xl bg-white p-6 shadow-lg">
          <div className="relative h-[500px] w-full">
            <Image
              src={shoe.image}
              alt={shoe.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-cyan-500 font-semibold">
            {shoe.brand}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {shoe.name}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
            <span className="font-medium">4.8 (128 Reviews)</span>
          </div>

          <p className="mt-6 text-4xl font-bold text-blue-600">
            ${shoe.price}
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            {shoe.description}
          </p>

          {/* Specifications */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-xl font-bold">
              Specifications
            </h2>

            <div className="space-y-3">
              <p>
                <strong>Category:</strong> {shoe.category}
              </p>

              <p>
                <strong>Color:</strong> {shoe.color}
              </p>

              <p>
                <strong>Brand:</strong> {shoe.brand}
              </p>
            </div>
          </div>

          {/* Sizes */}
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-bold">
              Select Size
            </h2>

            <div className="flex gap-3">
              {[38, 39, 40, 41, 42, 43].map((size) => (
                <button
                  key={size}
                  className="rounded-xl border px-5 py-3 transition hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition hover:opacity-90">
              <ShoppingCart size={20} />
              Add To Cart
            </button>

            <button className="rounded-xl border px-8 py-4 font-semibold hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="mx-auto mt-20 w-11/12 max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold">
          Related Products
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {shoes
            .filter(
              (item) =>
                item.category === shoe.category && item.id !== shoe.id
            )
            .slice(0, 4)
            .map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-4 shadow"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>

                <h3 className="mt-4 font-semibold">
                  {item.name}
                </h3>

                <p className="mt-2 font-bold text-cyan-600">
                  ${item.price}
                </p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;