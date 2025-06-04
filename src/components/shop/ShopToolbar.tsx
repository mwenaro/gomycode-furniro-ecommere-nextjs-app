import { FaFilter, FaThLarge, FaBars } from "react-icons/fa";

export default function ShopToolbar() {
  return (
    <div className="flex flex-wrap justify-between text-black items-center bg-[#F9F1E7] px-4 py-4 rounded-md mb-6 text-sm ">
      {/* Left section */}
      <div className="flex items-center gap-4 flex-wrap">
        <button className="flex items-center gap-2 font-medium">
          <FaFilter /> Filter
        </button>

        <div className="flex gap-2 text-lg">
          <button className="p-1 border border-black">
            <FaThLarge />
          </button>
          <button className="p-1 border border-gray-400">
            <FaBars />
          </button>
        </div>

        <div className="hidden sm:block border-l h-6 border-gray-400 mx-2" />

        <p className="text-gray-700">Showing 1-16 of 32 results</p>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <span className="font-medium">Show</span>
        <select className="border px-2 py-1 bg-white text-center w-16 text-gray-600">
          <option>16</option>
          <option>24</option>
          <option>32</option>
        </select>

        <span className="font-medium">Sort by</span>
        <select className="border px-2 py-1 bg-white text-gray-600">
          <option>Default</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      
    </div>
  );
}
