import React from "react";
import { BlogPosts } from "./BlogPosts";
import { BlogCategories } from "./BlogCategories";

export function BlogSidebar() {
  return (
    <section className="space-y-10 lg:max-w-[13rem] mx-auto">
      {/* Categories */}
      <div>
        <BlogCategories />
      </div>

      {/* recent posts */}
      <div>
        <h3 className="text-lg font-semibold text-black mb-4">Recent Posts</h3>
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
          <BlogPosts
            image="/blogimages/post4.png"
            title="Modern home in Milan"
          />
          <BlogPosts
            image="/blogimages/post5.png"
            title="Colorful office redesign"
          />
        </div>
      </div>
    </section>
  );
}
