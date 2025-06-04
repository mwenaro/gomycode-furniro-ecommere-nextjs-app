import Image from "next/image";

export default function ShopHero() {
  return (
    <div className="relative h-60 md:h-72 w-full">
      <Image
        src="/images/shop-images/Rectangle1.png"
        alt="Shop banner"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Shop</h1>
        <p className="text-sm md:text-base">
          <span className="font-semibold">Home</span> &gt; Shop
        </p>
      </div>
    </div>
  );
}
