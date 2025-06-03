import React from "react";

// Sample categories with post counts
const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 },
];

export function BlogCategories() {
  return (
    <ul className="space-y-5">
      {categories.map((category, idx) => (
        <li
          key={idx}
          className="flex justify-between text-sm text-[#9F9F9F]"
        >
          <span>{category.name}</span>
          <span className="text-[#9F9F9F]">{category.count}</span>
        </li>
      ))}
    </ul>
  );
}
