"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { shoes } from "@/data/shoes";


const ProductsPage = () => {

  const [products, setProducts] = useState(shoes);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("");



  useEffect(() => {

    const savedProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );


    setProducts([
      ...shoes,
      ...savedProducts,
    ]);


  }, []);





  const filteredProducts = products

    // Search by name
    .filter((product) =>
      product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    )


    // Category filter
    .filter((product) =>
      category === "All"
        ? true
        : product.category === category
    )


    // Price sorting
    .sort((a, b) => {

      if (sort === "low") {
        return a.price - b.price;
      }


      if (sort === "high") {
        return b.price - a.price;
      }


      return 0;

    });







  return (

    <main className="min-h-screen bg-cyan-800 py-16">


      <div className="mx-auto w-11/12 max-w-7xl">



        <h1 className="mb-10 text-4xl font-bold text-white">
          All Products
        </h1>





        {/* Search Filter Sort */}

        <div className="mb-10 grid gap-4 md:grid-cols-3">



          {/* Search */}

          <input
            type="text"
            placeholder="Search shoes..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="rounded-lg px-4 py-3 bg-white outline-none"
          />





          {/* Category */}

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="rounded-lg px-4 py-3 bg-white outline-none"
          >

            <option value="All">
              All Category
            </option>


            <option value="Running">
              Running
            </option>


            <option value="Sports">
              Sports
            </option>


            <option value="Casual">
              Casual
            </option>


            <option value="Basketball">
              Basketball
            </option>


            <option value="Lifestyle">
              Lifestyle
            </option>


            <option value="Skate">
              Skate
            </option>


          </select>






          {/* Sort */}

          <select
            value={sort}
            onChange={(e)=>setSort(e.target.value)}
            className="rounded-lg px-4 py-3 outline-none bg-white"
          >

            <option value="">
              Sort By Price
            </option>


            <option value="low">
              Price Low - High
            </option>


            <option value="high">
              Price High - Low
            </option>


          </select>



        </div>







        {/* Products Grid */}

        {
          filteredProducts.length > 0 ? (

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


              {
                filteredProducts.map((shoe)=>(

                  <ProductCard
                    key={shoe.id}
                    shoe={shoe}
                  />

                ))
              }


            </div>


          ) : (

            <h2 className="text-center text-xl text-white">
              No products found
            </h2>

          )
        }




      </div>


    </main>

  );
};


export default ProductsPage;