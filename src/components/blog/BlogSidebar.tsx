import React from "react";
import { BlogPosts } from "./BlogPosts";
import { BlogCategories } from "./BlogCategories";

export function BlogSidebar() {
   

  return (
    <aside className="space-y-10 lg:max-w-[13rem] mx-auto">
      {/* search bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-700 rounded-md text-gray-500"
        />
            <img
        src="/blogimages/search.png"
        alt="Search"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4"
      />
      </div>
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Categories</h3>
        <BlogCategories />
      </div>

      {/* recent posts */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-6">Recent Posts</h3>
        <div className="space-y-8">
        <BlogPosts
          image="/blogimages/post1.png"
          title="Going all-in with millennial design"
        />
        <BlogPosts
          image="/blogimages/post2.png"
          title="Exploring new ways of decorating"
        />
        <BlogPosts
          image="/blogimages/post3.png"
          title="Handmade pieces that took time to make"
        />
        <BlogPosts image="/blogimages/post4.png" title="Modern home in Milan" />
        <BlogPosts
          image="/blogimages/post5.png"
          title="Colorful office redesign"
        />

        </div>
      </div>
    </aside>
  );
}
