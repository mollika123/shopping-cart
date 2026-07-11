"use client";


import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { shoes } from "@/data/shoes";


const ProductsPage = () => {


  const [products, setProducts] = useState(shoes);



  useEffect(() => {

    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );


    setProducts([
      ...shoes,
      ...savedProducts,
    ]);


  }, []);




  return (

    <main className="bg-cyan-800 py-16">


      <div className="mx-auto w-11/12">


        <h1 className="mb-10 text-4xl text-white font-bold">
          All Products
        </h1>



        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {
            products.map((shoe) => (

              <ProductCard
                key={shoe.id}
                shoe={shoe}
              />

            ))
          }


        </div>


      </div>


    </main>

  );
};


export default ProductsPage;