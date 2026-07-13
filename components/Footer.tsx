"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-950 text-gray-300">

      <div className="mx-auto grid w-11/12 gap-10 py-12 md:grid-cols-4">


        {/* Brand */}
        <div>

          <Link href="/">
            <h1 className="text-3xl font-extrabold tracking-wide text-white">
              KICK
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                HUB
              </span>
            </h1>
          </Link>


          <p className="mt-3 text-sm text-gray-400">
            Premium Footwear
          </p>


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

            <li>
              <Link href="/products" className="hover:text-cyan-300">
                New Arrivals
              </Link>
            </li>


            <li>
              <Link href="/products?category=running" className="hover:text-cyan-300">
                Running Shoes
              </Link>
            </li>


            <li>
              <Link href="/products?category=casual" className="hover:text-cyan-300">
                Casual Shoes
              </Link>
            </li>


            <li>
              <Link href="/products?category=sports" className="hover:text-cyan-300">
                Sports Shoes
              </Link>
            </li>

          </ul>

        </div>




        {/* Support */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Support
          </h3>


          <ul className="space-y-3 text-sm">

            <li>
              <Link href="/contact" className="hover:text-cyan-300">
                Contact Us
              </Link>
            </li>


            <li>
              <Link href="/faq" className="hover:text-cyan-300">
                FAQ
              </Link>
            </li>


            <li>
              <Link href="/shipping" className="hover:text-cyan-300">
                Shipping Policy
              </Link>
            </li>


            <li>
              <Link href="/return-policy" className="hover:text-cyan-300">
                Return Policy
              </Link>
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


            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-blue-500"
            >
              <FaFacebook size={18}/>
            </a>


            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-pink-500"
            >
              <FaInstagram size={18}/>
            </a>


            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 hover:bg-blue-400"
            >
              <FaTwitter size={18}/>
            </a>


          </div>


        </div>


      </div>




      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">

        © {new Date().getFullYear()} KICKHUB. All rights reserved.

      </div>


    </footer>
  );
};

export default Footer;