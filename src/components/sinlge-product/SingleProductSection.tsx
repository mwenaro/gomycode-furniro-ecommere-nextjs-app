import { products } from "@/constants";
import { AsgaardSofa } from "./AsgaardSofa";
import { Description } from "./Description";
import NavigationTrail from "./NavigationTrail";
import { RelatedProducts } from "./RelatedProducts";

export function SingleProductSection() {
  return (
    <section className=" m-4">
      <NavigationTrail />
      <AsgaardSofa />
      <Description />
      <RelatedProducts products={products as any}/>
    </section>
  )
}
