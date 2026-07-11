const Footer = () => {
  return (
    <footer className=" bg-cyan-900 text-gray-300">
      <div className="mx-auto grid w-11/12 gap-10 py-12 md:grid-cols-4">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
         

            <div>
              <h1 className="text-2xl font-extrabold tracking-wide text-white">
                KICK<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">HUB</span>
              </h1>

              <p className="text-xs text-gray-500">
                Premium Footwear
              </p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Discover premium shoes designed for comfort,
            style and everyday performance.
          </p>
        </div>


        {/* Shop */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Shop
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-white">
              New Arrivals
            </li>

            <li className="cursor-pointer hover:text-white">
              Running Shoes
            </li>

            <li className="cursor-pointer hover:text-white">
              Casual Shoes
            </li>

            <li className="cursor-pointer hover:text-white">
              Sports Shoes
            </li>
          </ul>
        </div>


        {/* Support */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Support
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="cursor-pointer hover:text-white">
              Contact Us
            </li>

            <li className="cursor-pointer hover:text-white">
              FAQ
            </li>

            <li className="cursor-pointer hover:text-white">
              Shipping Policy
            </li>

            <li className="cursor-pointer hover:text-white">
              Return Policy
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact
          </h3>

          <p className="text-sm">
            Email: support@kickhub.com
          </p>

          <p className="mt-2 text-sm">
            Phone: +39 123 456 789
          </p>


          <div className="mt-5 flex gap-3">

            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500">
              f
            </div>

            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500">
              i
            </div>

            <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400">
              t
            </div>

          </div>
        </div>

      </div>


      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} KICKHUB. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;