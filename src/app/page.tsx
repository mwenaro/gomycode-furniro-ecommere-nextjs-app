import {
  GallerySection,
  HeroSection,
  ProductCategories,
  ProductShowcase,
  RoomInspiration,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductCategories />
      <ProductShowcase />
      <RoomInspiration />
      <GallerySection />
    </>
  );
}
