"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";

import {
  Eye,
  EyeSlash,
  Person,
  At,
  ShieldKeyhole,
} from "@gravity-ui/icons";

import { signUpWithEmail } from "@/lib/auth-service";


export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setError("");
    setSuccess("");
    setIsLoading(true);


    try {

      await signUpWithEmail(
        name,
        email,
        password
      );


      setSuccess(
        "Account created successfully!"
      );


      setName("");
      setEmail("");
      setPassword("");


      setTimeout(() => {
        router.push("/");
      }, 1500);


    } catch (err) {

      const errorInstance = err as Error;

      setError(
        errorInstance.message ||
        "Something went wrong"
      );


    } finally {

      setIsLoading(false);

    }

  };



  return (

    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">


      <Card
        className="
        w-full 
        max-w-md 
        p-8 
        rounded-2xl
        shadow-lg
        border 
        border-zinc-200 
        dark:border-zinc-800
        "
      >


        {/* Header */}

        <div className="text-center mb-8">


          <h1 className="
          text-3xl 
          font-bold
          text-zinc-900
          dark:text-white
          ">
            Create an account
          </h1>


          <p className="
          text-sm 
          text-zinc-500 
          mt-2
          ">
            Join ShopCart and start shopping today
          </p>


        </div>





        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-6"
        >



          {/* Name */}

          <TextField
            isRequired
                      className="flex flex-col gap-2"
                      name="name"
          >

            <Label>
              Name
            </Label>


            <InputGroup
              className="
              flex
              items-center
              gap-3
              h-12
              w-full
              border
              border-zinc-200
              dark:border-zinc-800
              rounded-xl
              px-4
              bg-white
              dark:bg-zinc-900
              focus-within:border-blue-500
              transition
              "
            >

              <Person className="h-5 w-5 text-zinc-400"/>


              <Input
                className="w-full text-sm"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e)=>
                  setName(e.target.value)
                }
              />


            </InputGroup>


          </TextField>





          {/* Email */}

          <TextField
            isRequired
                      className="flex flex-col gap-2"
                      name="email"
          >

            <Label>
              Email Address
            </Label>



            <InputGroup
              className="
              flex
              items-center
              gap-3
              h-12
              w-full
              border
              border-zinc-200
              dark:border-zinc-800
              rounded-xl
              px-4
              bg-white
              dark:bg-zinc-900
              focus-within:border-blue-500
              transition
              "
            >


              <At className="h-5 w-5 text-zinc-400"/>


              <Input

                className="w-full text-sm"

                type="email"

                placeholder="you@example.com"

                value={email}

                onChange={(e)=>
                  setEmail(e.target.value)
                }

              />


            </InputGroup>


          </TextField>






          {/* Password */}

          <TextField
            isRequired
                      className="flex flex-col gap-2"
                      name="password"
          >

            <Label>
              Password
            </Label>



            <InputGroup
              className="
              flex
              items-center
              gap-3
              h-12
              w-full
              border
              border-zinc-200
              dark:border-zinc-800
              rounded-xl
              px-4
              bg-white
              dark:bg-zinc-900
              focus-within:border-blue-500
              transition
              "
            >


              <ShieldKeyhole 
                className="h-5 w-5 text-zinc-400"
              />



              <Input

                className="w-full text-sm"

                type={
                  isVisible
                  ? "text"
                  : "password"
                }


                placeholder="Choose a password"

                value={password}

                onChange={(e)=>
                  setPassword(e.target.value)
                }

              />



              <button

                type="button"

                onClick={toggleVisibility}

                className="
                flex
                items-center
                text-zinc-400
                hover:text-zinc-700
                "

              >

                {
                  isVisible

                  ?

                  <EyeSlash className="h-5 w-5"/>

                  :

                  <Eye className="h-5 w-5"/>

                }


              </button>



            </InputGroup>


          </TextField>






          {/* Error */}

          {
            error &&

            <div className="
            p-3
            rounded-xl
            bg-red-100
            text-red-700
            text-sm
            "
            >

              {error}

            </div>
          }






          {/* Success */}

          {
            success &&

            <div className="
            p-3
            rounded-xl
            bg-green-100
            text-green-700
            text-sm
            "
            >

              {success}

            </div>

          }







          <Button

            type="submit"

            isDisabled={isLoading}

            className="
            w-full
            h-12
            rounded-xl
            bg-blue-600
            text-white
            font-medium
            hover:bg-blue-700
            "

          >

            {
              isLoading

              ?

              "Creating account..."

              :

              "Register"

            }


          </Button>







          <div className="
          text-center
          text-sm
          text-zinc-500
          "
          >

            Already have an account?{" "}


            <Link

              href="/login"

              className="
              text-blue-600
              font-medium
              hover:underline
              "

            >

              Sign in

            </Link>


          </div>




        </form>


      </Card>


    </div>

  );
}