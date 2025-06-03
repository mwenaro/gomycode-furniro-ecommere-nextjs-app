import Image from 'next/image';

const categories = [
  {
    name: 'Living Room',
    image: '/image-living room.png',
  },
  {
    name: 'Bedroom',
    image: '/image-1.png',
  },
  {
    name: 'Dining',
    image: '/image-3.png',
  },
];

const ProductCategories: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Browse The Range</h2>
        <p className="text-center text-gray-600 mb-12">
          Explore our diverse furniture categories to find the perfect fit for your home.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 w-full mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;