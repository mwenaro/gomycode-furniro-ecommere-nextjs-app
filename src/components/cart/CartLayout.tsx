import React from "react";
import Image from "next/image";
import Features from "../shop/Features";
import Link from 'next/link';

export default function CartLayout() {
  const cartItem = {
    name: "Asgaard Sofa",
    price: 250000,
    quantity: 1,
    image: "/cartimages/sofa.png",
  };

  return (
    <div className="bg-white container mx-auto">
      {/* hero section */}
      <div
        className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url('/cartimages/background.png')` }}
      >
        <Image
          src="/cartimages/main logo.png"
          alt="Logo"
          height={20}
          width={20}
        />
        <h1 className="text-3xl font-bold text-black">Cart</h1>
        <p className="text-sm text-gray-700 mt-2">
          <span className="text-black font-medium">Home</span> &gt; Cart
        </p>
      </div>
      {/* main section */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex justify-between font-semibold border-b py-2">
                  <span>Product</span>
                  <span>Price</span>
                  <span>Quantity</span>
                  <span>Subtotal</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b">
                  <div className="flex gap-4 items-center">
                    <Image src={cartItem.image} alt={cartItem.name} width={80} height={80} />
                    <span>{cartItem.name}</span>
                  </div>
                  <span>Rs. {cartItem.price.toLocaleString()}</span>
                  <input
                    type="number"
                    defaultValue={cartItem.quantity}
                    className="w-16 border px-2 py-1"
                  />
                  <span>Rs. {(cartItem.price * cartItem.quantity).toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-[#F9F1E7] p-6 rounded-md">
                <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>Rs. {cartItem.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span>Total</span>
                  <span className="text-orange-500 font-bold">Rs. {cartItem.price.toLocaleString()}</span>
                </div>
                <Link href="/checkout">
                  <button className="bg-black text-white w-full py-2 rounded">Check Out</button>
                </Link>
              </div>
            </div>
      {/* features */}
      <div className="pt-6">
        <Features />
      </div>
    </div>
  );
}
