const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-11/12">

        <div className="animate-pulse">

          {/* Hero skeleton */}
          <div className="h-80 rounded-3xl bg-gray-200"></div>


          {/* Cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-4 shadow"
                >
                  <div className="h-64 rounded-xl bg-gray-200"></div>

                  <div className="mt-5 h-5 w-3/4 rounded bg-gray-200"></div>

                  <div className="mt-3 h-4 w-1/2 rounded bg-gray-200"></div>

                  <div className="mt-5 h-10 rounded-xl bg-gray-200"></div>
                </div>
              ))
            }
          </div>

        </div>

      </div>
    </div>
  );
};

export default Loading;