"use client";

import { useEffect, useState } from "react";

const InitialLoader = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);


    return () => clearTimeout(timer);

  }, []);



  if (loading) {
    return (

      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cyan-900">


        {/* Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />



        {/* Glow */}
        <div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)",
          }}
        />



        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-7">


          {/* Logo */}

          <div className="flex items-center gap-3">


            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl">

              👟

            </div>


            <span className="text-3xl font-bold tracking-tight text-gray-900">

              KICKHUB

            </span>


          </div>





          {/* Spinner */}

          <div className="relative h-16 w-16">


            <div
              className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent"
              style={{
                borderTopColor: "#06b6d4",
                borderRightColor: "#2563eb",
                animationDuration: "1s",
              }}
            />


            <div
              className="absolute inset-3 animate-spin rounded-full border-[3px] border-transparent"
              style={{
                borderTopColor: "#22d3ee",
                borderLeftColor: "#2563eb",
                animationDuration: "0.7s",
                animationDirection: "reverse",
              }}
            />


            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 animate-pulse" />


          </div>





          {/* Loading Text */}

          <p className="animate-pulse text-xs font-semibold uppercase tracking-[5px] text-gray-400">

            Loading...

          </p>





          {/* Progress Bar */}

          <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-200">


            <div
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg,#06b6d4,#2563eb)",
                animation:
                  "fillbar 2.5s ease-in-out infinite",
              }}
            />


          </div>





          {/* Tagline */}

          <p className="text-sm text-gray-400">

            Step into your style

          </p>



        </div>





        <style>{`

          @keyframes fillbar {

            0% {
              width:0%;
            }

            70% {
              width:100%;
            }

            100% {
              width:100%;
            }

          }

        `}</style>



      </div>

    );
  }



  return children;

};


export default InitialLoader;