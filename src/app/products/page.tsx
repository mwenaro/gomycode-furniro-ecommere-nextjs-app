import { BuyButton } from "@/components/BuyButton";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  
  title: "Furturo Product Page",
  description: "Browse through a list of our samples items",
};
export default function page() {
  const prods = ["product1", "product2", "product3", "product4"];
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl"> Products</h2>
      <ul>
        {prods.map((p) => (
          <li key={p}>
            {/* <Link href={`/products/${p}`} >
              {p}
            </Link> */}
            <BuyButton product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
