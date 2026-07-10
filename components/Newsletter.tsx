const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="mx-auto w-11/12 max-w-6xl rounded-3xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-16 text-center text-white">

        <h2 className="text-4xl font-bold">
          Stay Updated
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-100">
          Subscribe to our newsletter and be the first to know about
          new arrivals, exclusive offers, and the latest sneaker trends.
        </p>

        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-xl border-none bg-white px-5 py-4 text-gray-800 outline-none"
          />

          <button className="rounded-xl bg-black px-8 py-4 font-semibold transition hover:bg-gray-900">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;