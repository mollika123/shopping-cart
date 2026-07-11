"use client";

import {
  Button,
  Form,
  Input,
  TextArea,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";


const AddProductPage = () => {
const router = useRouter();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    const formData = new FormData(e.currentTarget);


    const product = {
      id: Date.now(),

      name: formData.get("name"),

      description: formData.get("description"),

      price: Number(formData.get("price")),

      brand: formData.get("brand"),

      category: formData.get("category"),

      color: formData.get("color"),

      image: formData.get("image"),
size: formData
  .get("size")
  ?.toString()
  .split(",")
  .map(Number),
    };



    const oldProducts = JSON.parse(
      localStorage.getItem("products") || "[]"
    );



    localStorage.setItem(
      "products",
      JSON.stringify([
        ...oldProducts,
        product,
      ])
    );


    alert("Product Added Successfully");


    e.currentTarget.reset();
router.push('/products')
  };



  return (

    <main className="bg-gray-50 py-16">

      <div className="mx-auto w-11/12 max-w-3xl">


        <div className="rounded-3xl bg-white p-8 shadow">


          <h1 className="mb-8 text-center text-3xl font-bold">
            Add New Shoe
          </h1>



          <Form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >


            <TextField name="name" isRequired>
              <Label>Product Name</Label>
              <Input placeholder="Nike Air Max" />
            </TextField>



            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea placeholder="Product details..." />
            </TextField>
           <TextField name="size" isRequired>
  <Label>Size</Label>
  <Input placeholder="38,39,40,41,42" />
</TextField>



            <TextField name="price" isRequired>
              <Label>Price</Label>
              <Input type="number" placeholder="120" />
            </TextField>



            <TextField name="brand">
              <Label>Brand</Label>
              <Input placeholder="Nike" />
            </TextField>



            <TextField name="category">
              <Label>Category</Label>
              <Input placeholder="Running" />
            </TextField>



            <TextField name="color">
              <Label>Color</Label>
              <Input placeholder="Black" />
            </TextField>



            <TextField name="image">
              <Label>Image URL</Label>
              <Input placeholder="https://image.com/shoe.jpg" />
            </TextField>



            <Button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
            >
              Add Product
            </Button>


          </Form>


        </div>

      </div>

    </main>

  );
};


export default AddProductPage;