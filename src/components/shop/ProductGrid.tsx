import ProductCard from "@/components/shop/ProductCard";
import { products } from "@/constants";









export default function ProductGrid() {
  return (
   <><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
          {products.map((product, index) => (
              <ProductCard key={index} {...product} />
          ))}

      </div><div className="flex justify-center items-center gap-2 mt-8 px-10 py-5 mt-5">
              <button className=" bg-[#B88E2F] px-3 py-1 border rounded  text-white">1</button>
              <button className="bg-[#F9F1E7] px-3 py-1 border rounded  text-black">2</button>
              <button className="bg-[#F9F1E7] px-3 py-1 border rounded  text-black">3</button>
              <button className="bg-[#F9F1E7] px-3 py-1 border rounded  text-black">Next</button>
          </div></>
    
  );
}
