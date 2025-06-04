import { BLOG_CATEGORIES } from "@/constants";

export function BlogCategories() {
  return (
    <ul className="space-y-5 text-sm text-[#9F9F9F]">
      {BLOG_CATEGORIES.map((category) => (
        <li className="flex justify-between" key={category.title}>
          <span>{category.title}</span>
          <span>{category.qty}</span>
        </li>
      ))}
    </ul>
  );
}
