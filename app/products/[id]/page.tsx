"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { shoes } from "@/data/shoes";
import { Star } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";


interface ProductDetailsProps {
  params: Promise<{
    id: string;
  }>;
}


const ProductDetailsPage = ({ params }: ProductDetailsProps) => {


  const [shoe, setShoe] = useState<any>(null);



  useEffect(() => {


    const getProduct = async () => {

      const { id } = await params;



      const savedProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
      );



      const allProducts = [
        ...shoes,
        ...savedProducts,
      ];



      const product = allProducts.find(
        (item) => item.id.toString() === id
      );



      setShoe(product);

    };



    getProduct();


  }, [params]);





  if (!shoe) {

    return (
      <div className="flex min-h-screen items-center justify-center">

        <h1 className="text-2xl font-bold text-gray-500">
          Product Loading...
        </h1>

      </div>
    );

  }





  return (

    <main className="bg-cyan-800 py-16">


      <div className="mx-auto grid w-11/12 max-w-7xl gap-12 lg:grid-cols-2">



        {/* Image */}

        <div className="rounded-3xl  p-6 shadow-lg">


          <div className="relative h-full w-full">


            <Image

              src={shoe.image}

              alt={shoe.name}

              fill

              className="rounded-2xl object-cover"

            />


          </div>


        </div>





        {/* Details */}

        <div>


          <p className="font-semibold text-cyan-500">

            {shoe.brand}

          </p>




          <h1 className="mt-2 text-4xl font-bold text-gray-300">

            {shoe.name}

          </h1>





          {/* Rating */}

          <div className="mt-4 flex items-center gap-2">


            <Star
              size={20}
              className="fill-yellow-400 text-yellow-400"
            />


            <span className="font-medium text-gray-300">

              4.8 (128 Reviews)

            </span>


          </div>





          <p className="mt-6 text-4xl font-bold text-cyan-400">

            ${shoe.price}

          </p>





          <p className="mt-6 leading-8 text-gray-300">

            {shoe.description}

          </p>





          {/* Specification */}

          <div className="mt-8 rounded-2xl bg-white p-6 shadow">


            <h2 className="mb-4 text-xl font-bold">

              Specifications

            </h2>



            <div className="space-y-3">


              <p>
                <strong>Category:</strong> {shoe.category}
              </p>



              <p>
                <strong>Color:</strong> {shoe.color}
              </p>



              <p>
                <strong>Brand:</strong> {shoe.brand}
              </p>



            </div>


          </div>





          {/* Size */}

          <div className="mt-8">


            <h2 className="mb-3 text-xl font-bold text-gray-300">

              Select Size

            </h2>



            <div className="flex flex-wrap gap-3">


              {
                (shoe.size || [38,39,40,41,42,43]).map(
                  (size:number)=>(
                    
                    <button

                      key={size}

                      className="rounded-xl border px-5 py-3 transition hover:bg-black hover:text-white"

                    >

                      {size}

                    </button>

                  )
                )
              }


            </div>


          </div>





          {/* Cart */}

          <div className="mt-10">


            <AddToCartButton shoe={shoe}/>


          </div>




        </div>



      </div>




    </main>

  );

};



export default ProductDetailsPage;