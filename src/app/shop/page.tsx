import Features from "@/components/shop/Features";

import ProductGrid from "@/components/shop/ProductGrid";
import ShopHero from "@/components/shop/ShopHero";
import ShopToolbar from "@/components/shop/ShopToolbar";

export default function ShopPage() {
  return (
    <div className=" bg-white ">
      <div className="px-2 md:px-12">
        <ShopHero />

        <ShopToolbar />

        <ProductGrid />

        <Features />
      </div>
    </div>
  );
}
