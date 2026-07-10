import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-blue-600"
        >
          🛒 Shoe
        </Link>


        {/* Menu */}
        <ul className="flex items-center gap-8 text-blue-700 font-bold">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-blue-600">
              Products
            </Link>
          </li>

          <li>
            <Link href="/cart" className="hover:text-blue-600">
              🛒 Cart
            </Link>
          </li>
        </ul>


        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-md border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;