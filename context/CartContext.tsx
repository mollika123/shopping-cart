"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { Shoe } from "@/types/shoe";


interface CartItem extends Shoe {
  quantity: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (shoe: Shoe) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}


const CartContext = createContext<CartContextType | undefined>(
  undefined
);



export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {


  const [cart, setCart] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);



  // Load cart from localStorage
  useEffect(() => {

    const savedCart = localStorage.getItem("cart");


    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }


    setLoaded(true);

  }, []);




  // Save cart to localStorage
  useEffect(() => {

    if (loaded) {

      localStorage.setItem(
        "cart",
        JSON.stringify(cart)
      );

    }

  }, [cart, loaded]);





  // Add To Cart
  const addToCart = (shoe: Shoe) => {

    setCart((prev) => {

      const existingItem = prev.find(
        (item) => item.id === shoe.id
      );


      if (existingItem) {

        return prev.map((item) =>
          item.id === shoe.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );

      }



      return [
        ...prev,
        {
          ...shoe,
          quantity: 1,
        },
      ];

    });

  };





  // Remove Item
  const removeFromCart = (id: number) => {

    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

  };






  // Increase Quantity
  const increaseQuantity = (id: number) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  };







  // Decrease Quantity
  const decreaseQuantity = (id: number) => {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
    );

  };






  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >

      {children}

    </CartContext.Provider>

  );

};






export const useCart = () => {

  const context = useContext(CartContext);


  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }


  return context;

};