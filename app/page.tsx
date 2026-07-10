import Categories from "@/components/Categories";
import FeaturedShoes from "@/components/FeaturedShoes";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { shoes } from "@/data/shoes";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* <section className="w-11/12 mx-auto grid grid-cols-1 gap-6 p-8 md:grid-cols-2 lg:grid-cols-3">
        {
          shoes.map((shoe) => (
            <ProductCard 
              key={shoe.id}
              shoe={shoe}
            />
          ))
        }
      </section> */}

      <FeaturedShoes></FeaturedShoes>
      <Categories></Categories>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
}