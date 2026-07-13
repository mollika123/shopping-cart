import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-gray-50 py-16">

      {/* Hero */}
      <section className="mx-auto w-11/12 max-w-6xl text-center">

        <h1 className="text-5xl font-bold text-gray-900">
          About KICKHUB
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          KICKHUB is a modern footwear store that brings stylish,
          comfortable, and high-quality shoes for everyday life.
          We focus on quality, design, and customer satisfaction.
        </p>

      </section>



      {/* Mission */}
      <section className="mx-auto mt-16 grid w-11/12 max-w-6xl gap-8 md:grid-cols-3">


        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold text-cyan-600">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            Our mission is to provide comfortable and fashionable
            footwear with an amazing shopping experience.
          </p>

        </div>



        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold text-cyan-600">
            Quality First
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            We carefully select products to ensure durability,
            comfort, and premium quality.
          </p>

        </div>



        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold text-cyan-600">
            Customer Care
          </h2>

          <p className="mt-4 text-gray-600 leading-7">
            We always try to provide fast support and a smooth
            shopping journey for our customers.
          </p>

        </div>


      </section>




      {/* Stats */}
      <section className="mx-auto mt-16 w-11/12 max-w-6xl rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-center text-white">


        <div className="grid gap-8 md:grid-cols-3">


          <div>
            <h3 className="text-4xl font-bold">
              10K+
            </h3>
            <p>
              Happy Customers
            </p>
          </div>



          <div>
            <h3 className="text-4xl font-bold">
              500+
            </h3>
            <p>
              Shoe Collection
            </p>
          </div>



          <div>
            <h3 className="text-4xl font-bold">
              24/7
            </h3>
            <p>
              Customer Support
            </p>
          </div>


        </div>


      </section>




      {/* CTA */}
      <section className="mt-16 text-center">

        <h2 className="text-3xl font-bold">
          Find Your Perfect Pair Today
        </h2>


        <Link
          href="/products"
          className="mt-6 inline-block rounded-xl bg-cyan-600 px-8 py-3 font-semibold text-white hover:bg-cyan-700"
        >
          Explore Products
        </Link>


      </section>


    </main>
  );
};


export default AboutPage;