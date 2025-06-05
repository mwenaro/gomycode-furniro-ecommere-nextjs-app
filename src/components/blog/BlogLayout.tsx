import { BlogList } from "./BlogList";
import { BlogSidebar } from "./BlogSidebar";
import Features from "../shop/Features";
import Image from "next/image";

export default function BlogLayout() {
  return (
    <section className="bg-white container mx-auto ">
      {/* hero section */}
      <div
        className="relative w-full h-64 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: "url('/blogimages/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(95%) contrast(90%)",
        }}
      >
        <Image
          src="/blogimages/main logo.png"
          alt="Logo"
          height={70}
          width={70}
          className="filter brightness-95 contrast-150"
        />
        <h1 className="text-5xl font-bold text-black">Blog</h1>
        <p className="text-2xl text-gray-700 mt-2 font-semibold">
          <span className="text-black ">Home</span> &gt; Blog
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 pt-18 px-6 md:px-18">
        {/* Left section: blog list */}
        <div className="w-full lg:w-2/3">
          <BlogList />
        </div>
        {/* Right section: sidebar */}
        <div className="w-full lg:w-1/3 ">
          <BlogSidebar />
        </div>
      </div>
      <div className="flex justify-center space-x-3 mt-8">
        {/* page buttons */}
        <button className="w-9 h-9 rounded-sm border bg-[#B88E2F] text-white text-sm font-medium">
          1
        </button>
        <button className="w-9 h-9 rounded-sm border bg-[#F9F1E7] text-gray-700 text-sm font-medium">
          2
        </button>
        <button className="w-9 h-9 rounded-sm border bg-[#F9F1E7] text-gray-700 text-sm font-medium">
          3
        </button>
        {/* Next button */}
        <button className="w-16 h-9 rounded-sm border bg-[#F9F1E7] text-sm font-medium text-gray-700">
          Next
        </button>
      </div>
      {/* features */}
      <div className="pt-6">
        <Features />
      </div>
    </section>
  );
}
