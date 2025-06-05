import React from "react";
import Image from "next/image";
import Features from "../shop/Features";

export default function CheckoutLayout() {
  return (
    <div className="bg-white container mx-auto">
      {/* hero section */}
      <div
        className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: `url('/checkoutimages/background.png')` }}
      >
        <Image src="/checkoutimages/main logo.png" alt="Logo" height={20} width={20} />
                <h1 className="text-3xl font-bold text-black">Checkout</h1>
                <p className="text-sm text-gray-700 mt-2">
                  <span className="text-black font-medium">Home</span> &gt; Checkout
                </p>
      </div>
      {/*Main Section */}
      {/* Billing Details */}
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input placeholder="First Name" className="border p-2" />
            <input placeholder="Last Name" className="border p-2" />
          </div>
          <input placeholder="Company Name (Optional)" className="border p-2 w-full" />
          <select className="border p-2 w-full">
            <option>Sri Lanka</option>
          </select>
          <input placeholder="Street Address" className="border p-2 w-full" />
          <input placeholder="Town / City" className="border p-2 w-full" />
          <select className="border p-2 w-full">
            <option>Western Province</option>
          </select>
          <input placeholder="ZIP Code" className="border p-2 w-full" />
        </form>
        {/*Product Details */}
        <div className="bg-[#F9F1E7] p-6 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <div className="flex justify-between mb-2">
            <span>Asgaard Sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-orange-500 mb-4">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="space-y-2 mb-4">
            <label>
              <input type="radio" name="payment" className="mr-2" defaultChecked />
              Direct Bank Transfer
            </label>
            <label>
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            Your personal data will be used to process your order, support your experience, and more as per our privacy policy.
          </p>
          <button className="bg-white text-black w-full py-2 rounded">Place Order</button>
        </div>
      </div>
      {/* features */}
            <div className="pt-6">
              <Features />
            </div>
    </div>
  );
}
