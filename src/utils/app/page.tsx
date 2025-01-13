import BlogSection from "@/components/BlogSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrival";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";

export default function Home() {
  return (
    
      <main>
      <Hero/>
      <Features /> 
      <NewArrival />
      <BlogSection />
      <Footer />
      

      </main>

  );
}
