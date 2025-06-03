import { Product } from "@/types/Index";
import Image from "next/image";
import { FaHeart, FaRandom, FaShare } from "react-icons/fa";

interface ProductCardProps extends Product {}

export default function ProductCard({
  title,
  description,
  price,
  oldPrice,
  tag,
  image,
}: ProductCardProps) {
  const tagBg =  tag?.toLowerCase() === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"
  return (
    <div className="border border-white  hover:shadow-lg relative group overflow-hidden bg-gray-100 gap-5 ">
      <div className="relative w-full aspect-square mb-4">
        {tag && <span
          className={`absolute top-2 right-2 ${tagBg} text-white text-xs w-8 h-8 rounded-full z-10 font-semibold flex items-center justify-center`}
        >
          {tag}
        </span>
}
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
          <button className="bg-white text-yellow-600 px-6 py-2 font-medium">
            Add to cart
          </button>
          <div className="flex gap-6 text-white text-sm">
            <button className="flex items-center gap-1">
              <FaShare className="text-sm" /> Share
            </button>
            <button className="flex items-center gap-1">
              <FaRandom className="text-sm" /> Compare
            </button>
            <button className="flex items-center gap-1">
              <FaHeart className="text-sm" /> Like
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 py-5">
        <h3 className="font-semibold text-lg text-gray-700">{title}</h3>
        <p className="text-gray-500">{description}</p>
        <div className="mt-2">
          <span className=" text-primary font-bold text-gray-700">{price}</span>{" "}
          {oldPrice && (
            <>
              <br />
              <span className="line-through text-gray-400">{oldPrice}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
