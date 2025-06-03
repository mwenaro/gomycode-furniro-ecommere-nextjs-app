import React from "react";
import { BlogList } from "./BlogList";
import { BlogSidebar } from "./BlogSidebar";

export default function BlogLayout() {
  return (
    <div className="bg-white container mx-auto ">
        <div className="w-full h-64 bg-cover bg-center flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: `url('/blogimages/background.png')` }}
    >
      <img src="/blogimages/main logo.png" alt="Logo" />
      <h1 className="text-3xl font-bold text-black">Blog</h1>
      <p className="text-sm text-gray-700 mt-2">
        <span className="text-black font-medium">Home</span> &gt; Blog
      </p>
        </div>
      <div className="flex flex-col lg:flex-row gap-8 pt-18 px-10 py-10">
        {/* Left section: blog list */}
        <div className="w-full lg:w-2/3">
          <BlogList />
        </div>
        {/* Right section: sidebar */}
        <div className="w-full lg:w-1/3 ">
        <BlogSidebar/>
        </div>
      </div>
    </div>
  );
}
