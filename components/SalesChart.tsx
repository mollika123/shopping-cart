"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    month: "Jan",
    sales: 120,
  },
  {
    month: "Feb",
    sales: 200,
  },
  {
    month: "Mar",
    sales: 150,
  },
  {
    month: "Apr",
    sales: 300,
  },
  {
    month: "May",
    sales: 250,
  },
];


const SalesChart = () => {
  return (
    <div className="bg-cyan-50">
          <section className="mx-auto max-w-7xl px-6 py-16 ">

      <h2 className="mb-8 text-center text-3xl font-bold">
        Monthly Sales Overview
      </h2>


      <div className="h-[350px] w-full rounded-xl border p-5">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar 
              dataKey="sales" 
              fill="#0097A7"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </section>
</div>
  );
};


export default SalesChart;