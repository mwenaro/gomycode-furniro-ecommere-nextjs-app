"use client";
import React, { useState, useEffect } from "react";
import { BLOG_CATEGORIES } from "@/constants";
import Image from "next/image";

export function BlogCategories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  // Debounce input with 300ms delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Filter categories based on debounced term
  const filteredCategories = BLOG_CATEGORIES.filter((category) =>
    category.title.toLowerCase().includes(debouncedTerm.toLowerCase())
  );
  return (
    <div>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-700 rounded-md text-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Image
          height={60}
          width={60}
          src="/blogimages/search.png"
          alt="Search"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
        />
      </div>
      <h3 className="text-lg font-semibold text-black mb-4">Categories</h3>
      <ul className="space-y-5 text-sm text-[#9F9F9F]">
        {BLOG_CATEGORIES.map((category) => (
          <li className="flex justify-between" key={category.title}>
            <span>{category.title}</span>
            <span>{category.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
