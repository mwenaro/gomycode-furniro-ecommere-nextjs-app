import { AsgaardSofa } from "./AsgaardSofa";
import { Description } from "./Description";
import { RelatedProducts } from "./RelatedProducts";

export function SingleProductSection() {
  return (
    <section className=" m-4">
      <AsgaardSofa />
      <Description />
      <RelatedProducts />
    </section>
  )
}
