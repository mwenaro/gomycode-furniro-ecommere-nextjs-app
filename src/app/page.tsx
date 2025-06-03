import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";
import ProductShowcase from "@/components/home/Product-Showcase";
import RoomInspiration from "@/components/home/RoomInspiration";
import GallerySection from "@/components/home/GallerySection";



export default function Home() {
  return (
    <main>
      <Hero />
      <ProductCategories />
      <ProductShowcase /> 
      <RoomInspiration />
      <GallerySection />
      
      
    </main>
  );
}
