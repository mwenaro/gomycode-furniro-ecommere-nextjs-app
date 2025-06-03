import Image from 'next/image';

const products = [
  {
    name: 'Syltherine',
    desc: 'Stylish chair',
    price: 'Rp 2.500.000',
    image: '/product1.png',
    tag: '30% Off',
  },
  {
    name: 'Leviosa',
    desc: 'Stylish chair',
    price: 'Rp 2.500.000',
    image: '/product2.png',
  },
  {
    name: 'Lolito',
    desc: 'Luxury big sofa',
    price: 'Rp 7.000.000',
    image: '/product3.png',
    tag: 'New',
  },
  {
    name: 'Respira',
    desc: 'Outdoor bar table and stool',
    price: 'Rp 500.000',
    image: '/product4.png',
  },
  {
    name: 'Grifo',
    desc: 'Night lamp',
    price: 'Rp 1.500.000',
    image: '/product5.png',
  },
  {
    name: 'Muggo',
    desc: 'Small mug',
    price: 'Rp 150.000',
    image: '/product6.png',
    tag: 'New',
  },
  {
    name: 'Pingky',
    desc: 'Cute bed set',
    price: 'Rp 7.000.000',
    image: '/product7.png',
  },
  {
    name: 'Potty',
    desc: 'Minimalist flower pot',
    price: 'Rp 500.000',
    image: '/product8.png',
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg relative group">
              {product.tag && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded">
                  {product.tag}
                </span>
              )}
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.desc}</p>
              <p className="mt-2 font-medium">{product.price}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="border px-6 py-2 text-black hover:bg-black hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;