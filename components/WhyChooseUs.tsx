import {
  Truck,
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders over $100.",
    icon: Truck,
  },
  {
    id: 2,
    title: "Secure Payment",
    description: "Your payment information is safe and protected.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Easy Returns",
    description: "30-day hassle-free return policy for every purchase.",
    icon: RotateCcw,
  },
  {
    id: 4,
    title: "Premium Quality",
    description: "Every pair is crafted with comfort and durability.",
    icon: BadgeCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" bg-cyan-900 py-20">
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-400">
            Why Choose KICK<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">HUB</span>?
          </h2>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            We are committed to providing premium footwear with
            exceptional quality, fast delivery, and the best shopping
            experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl bg-cyan-700 p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-200">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;