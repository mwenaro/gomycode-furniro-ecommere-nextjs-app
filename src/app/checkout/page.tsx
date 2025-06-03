
'use client';
import React from 'react';

export default function CheckoutPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
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
          <button className="bg-black text-white w-full py-2 rounded">Place Order</button>
        </div>
      </div>
    </main>
  );
}
