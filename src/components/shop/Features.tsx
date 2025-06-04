import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-[#F9F1E7] py-15 px-4 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
        {/* High Quality */}
        <div className="flex items-start gap-3">
          <Image
            src="/images/shop-images/trophy.png"
            alt="High Quality"
            width={30}
            height={30}
          />
          <div>
            <h4 className="text-lg font-semibold text-black">High Quality</h4>
            <p className="text-gray-500 text-sm">crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-start gap-3">
          <Image
            src="/images/shop-images/guarantee.png"
            alt="Warranty"
            width={30}
            height={30}
          />
          <div>
            <h4 className="text-lg font-semibold text-black">Warranty Protection</h4>
            <p className="text-gray-500 text-sm">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-start gap-3">
          <Image
            src="/images/shop-images/shipping.png"
            alt="Free Shipping"
            width={30}
            height={30}
          />
          <div>
            <h4 className="text-lg font-semibold text-black">Free Shipping</h4>
            <p className="text-gray-500 text-sm">Order over 150 $</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-start gap-3">
          <Image
            src="/images/shop-images/customer-support.png"
            alt="24/7 Support"
            width={30}
            height={30}
          />
          <div>
            <h4 className="text-lg font-semibold text-black">24 / 7 Support</h4>
            <p className="text-gray-500 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
