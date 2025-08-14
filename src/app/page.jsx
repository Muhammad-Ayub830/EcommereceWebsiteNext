'use client'
import CardCarousel from "@/components/categorySlider/page";
import Deals from "@/components/deals/page";
import Footer from "@/components/footer/page";
import Hero from "@/components/hero/page";
import InstaStory from "@/components/instastory/page";
import Navbar from "@/components/navbar/page";
import Products from "@/components/products/page";
import Services from "@/components/services/page";
import Slider from "@/components/slider/page";
import SnapCardCarousel from "@/components/snapslider/page";
import Testimonial from "@/components/testimonial/page";
import Title from "@/components/title/title";

import { Fahkwang, Jost } from 'next/font/google'
import { useContext, useEffect } from "react";
import { itemsContext } from "./Context";
  const josts = Jost({
    subsets:['latin'],
  })
export default function Home() {
 
 const {items,setItems} = useContext(itemsContext)
  return (
    <div className={`${josts.className}`}>
       <div className="home bg-[#ffffff]  ">
      <Navbar />
      <Hero/>
      <Slider category={items} />
      <Title/>
      <Products items={items} />
      <Deals/>
      <Testimonial/>
      <InstaStory/>
      <Services />
      <Footer />
    </div>
    </div>
   
  );
}
