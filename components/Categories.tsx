import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Running Shoes",
    image: "/categories/running.png",
  },
  {
    id: 2,
    name: "Casual Shoes",
    image: "/categories/casual.webp",
  },
  {
    id: 3,
    name: "Sports Shoes",
    image: "/categories/OIP.jpeg",
  },
  {
    id: 4,
    name: "Basketball Shoes",
    image: "/categories/busket.jpeg",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-cyan-900">
      <div className="mx-auto w-11/12">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Shop By Category
          </h2>

          <p className="mt-3 text-gray-500">
            Find the perfect shoes for every occasion
          </p>
        </div>


        {/* Categories */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {
            categories.map((category) => (
              <div
                key={category.id}
                className="group relative h-64 overflow-hidden rounded-3xl"
              >

                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />


                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>

              </div>
            ))

          }

        </div>

      </div>
    </section>
  );
};

export default Categories;