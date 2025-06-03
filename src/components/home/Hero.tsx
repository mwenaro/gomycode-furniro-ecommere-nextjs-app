import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold text-gray-800">Furniro</h1>
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="flex space-x-4 text-gray-700 text-xl">
          <span>👤</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>

      {/* Hero Main */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-10 pt-10 pb-20">
        {/* Text Block */}
        <div className="max-w-lg">
          <p className="text-sm text-gray-600 mb-2 uppercase">New Arrival</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Discover Our <br /> New Collection
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="bg-[#B88E2F] text-white px-8 py-3 rounded-md hover:bg-[#a17929] transition">
            BUY NOW
          </button>
        </div>

        {/* Image Block */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/hero-furniture.jpg"
            alt="Hero Furniture"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;