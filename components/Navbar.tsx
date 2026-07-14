"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// 🔥 Better-Auth-এর বদলে Firebase-এর প্রয়োজনীয় ফাংশন ইম্পোর্ট করা হলো
import { auth } from "../lib/firebase"; 
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
// import { logOutUser } from "../lib/auth-service";
import Image from "next/image";
import { logOutUser } from "@/lib/auth-service";

const Navbar = () => {
  const router = useRouter();
  const { cart } = useCart();
  
  // 🔥 ফায়ারবেস ইউজারের স্টেট রাখার জন্য React State
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [open, setOpen] = useState(false);

  // 🔥 রিয়েল-টাইমে ফায়ারবেস ইউজারের স্টেট ট্র্যাকিং (লগইন/লগআউট ডিটেক্ট করা)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // আনমাউন্ট করার সময় লিসেনার বন্ধ করা
  }, []);

  const handleLogout = async () => {
    try {
      await logOutUser();
      setOpen(false);
      router.push("/login"); // লগআউটের পর লগইন পেজে রিডাইরেক্ট
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const privateLinks = [
    { name: "Add Product", href: "/items/add" },
    { name: "Manage Product", href: "/items/manage" },
  ];

  // 🔥 ফায়ারবেস 'user' চেক করে মেনু রেন্ডার করা
  const links = user
    ? [
        ...publicLinks.slice(0, 2),
        ...privateLinks,
        ...publicLinks.slice(2),
      ]
    : publicLinks;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-cyan-950 via-blue-950 to-purple-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-extrabold text-white">
            KICK
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              HUB
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-7 text-white">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition hover:text-cyan-300"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Cart */}
          <li>
            <Link href="/cart" className="relative">
              <ShoppingCart size={25} />
              {cart.length > 0 && (
                <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 text-white">
                {/* যদি ইউজারের প্রোফাইল পিকচার থাকে তবে সেটি দেখানো হবে, না থাকলে আইকন */}
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt="profile"
                    className="h-8 w-8 rounded-full border border-cyan-400 object-cover"
                  />
                ) : (
                  <User size={20} />
                )}
                <span>{user.displayName }</span>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-full bg-red-500 px-5 py-2 text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-full border border-cyan-300 px-5 py-2 text-white transition hover:bg-cyan-400 hover:text-black"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-full bg-cyan-500 px-5 py-2 text-white transition hover:bg-cyan-600"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="px-6 pb-6 text-white lg:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-cyan-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Cart */}
            <li>
              <Link
                href="/cart"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <ShoppingCart size={22} />
                Cart ({cart.length})
              </Link>
            </li>

            {user ? (
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-500 py-2 w-full text-center"
              >
                Logout
              </button>
            ) : (
              <div className="flex gap-3">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md border px-4 py-2 w-full text-center"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="rounded-md bg-cyan-500 px-4 py-2 w-full text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;