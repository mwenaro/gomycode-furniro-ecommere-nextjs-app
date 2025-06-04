import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3]">
    

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