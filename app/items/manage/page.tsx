"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Eye, Trash2 } from "lucide-react";


interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  brand: string;
  category: string;
  color: string;
  size: number[];
  description: string;
}


const ManagePage = () => {

  const [products, setProducts] = useState<Product[]>([]);



  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    setProducts(data);

  }, []);




  const handleDelete = (id: number) => {

    const updatedProducts = products.filter(
      (product) => product.id !== id
    );


    setProducts(updatedProducts);


    localStorage.setItem(
      "products",
      JSON.stringify(updatedProducts)
    );

  };




  return (
    <main className="bg-gray-50 py-16">

      <div className="mx-auto w-11/12 max-w-6xl">

        <h1 className="mb-10 text-4xl font-bold text-gray-900">
          Manage Products
        </h1>



        {
          products.length === 0 ? (

            <div className="rounded-3xl bg-white p-10 text-center shadow">
              <h2 className="text-2xl font-bold text-gray-500">
                No Products Added
              </h2>
            </div>

          ) : (


          <div className="overflow-x-auto rounded-3xl bg-white shadow">


            <table className="w-full">


              <thead className="border-b bg-gray-100">

                <tr>

                  <th className="p-5 text-left">
                    Image
                  </th>


                  <th className="p-5 text-left">
                    Name
                  </th>


                  <th className="p-5 text-left">
                    Price
                  </th>


                  <th className="p-5 text-left">
                    Category
                  </th>


                  <th className="p-5 text-left">
                    Action
                  </th>

                </tr>

              </thead>



              <tbody>


                {
                  products.map((product)=>(

                    <tr
                      key={product.id}
                      className="border-b"
                    >


                      <td className="p-5">

                        <div className="relative h-16 w-16">

                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="rounded-xl object-cover"
                          />

                        </div>

                      </td>



                      <td className="p-5 font-semibold">
                        {product.name}
                      </td>



                      <td className="p-5 font-bold text-cyan-600">
                        ${product.price}
                      </td>



                      <td className="p-5">
                        {product.category}
                      </td>



                      <td className="flex gap-3 p-5">


                        <Link
                          href={`/products/${product.id}`}
                          className="rounded-lg bg-cyan-100 p-2 text-cyan-600"
                        >
                          <Eye size={18}/>
                        </Link>



                        <button
                          onClick={() => handleDelete(product.id)}
                          className="rounded-lg bg-red-100 p-2 text-red-500"
                        >
                          <Trash2 size={18}/>
                        </button>


                      </td>


                    </tr>

                  ))
                }


              </tbody>


            </table>


          </div>

          )

        }


      </div>

    </main>
  );
};


export default ManagePage;