import ProductCard from "@/components/shop/ProductCard";






type Product = {
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  redtag?: string;
  greentag?: string;
  image: string;
};

const products: Product[] = [
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    redtag: "-30%",
    image: "/images/shop-images/image1.png",
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",

    image: "/images/shop-images/image2.png",
  },
  {
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    redtag: "-50%",
    image: "/images/shop-images/image3.png",
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    greentag: "New",
    image: "/images/shop-images/image4.png",
  },
  // row 2
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    redtag: "-30%",
    image: "/images/shop-images/image1.png",
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",

    image: "/images/shop-images/image2.png",
  },
  {
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    redtag: "-50%",
    image: "/images/shop-images/image3.png",
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    greentag: "New",
    image: "/images/shop-images/image4.png",
  },
  // row 3
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    redtag: "-30%",
    image: "/images/shop-images/image1.png",
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",

    image: "/images/shop-images/image2.png",
  },
  {
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    redtag: "-50%",
    image: "/images/shop-images/image3.png",
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    greentag: "New",
    image: "/images/shop-images/image4.png",
  },
  // row 4
  {
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    redtag: "-30%",
    image: "/images/shop-images/image1.png",
  },
  {
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",

    image: "/images/shop-images/image2.png",
  },
  {
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    redtag: "-50%",
    image: "/images/shop-images/image3.png",
  },
  {
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    greentag: "New",
    image: "/images/shop-images/image4.png",
  },
];


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
