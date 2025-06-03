import Image from 'next/image';

const RoomInspiration: React.FC = () => {
  return (
    <section className="bg-[#FCF8F3] py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold max-w-sm">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 max-w-md">
            Our designer already made a lot of beautiful prototipe of rooms that inspire you
          </p>
          <button className="bg-[#B88E2F] text-white px-6 py-3 rounded hover:bg-yellow-700">
            Explore More
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-64 w-full">
            <Image
              src="/room1.png"
              alt="Room 1"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="relative h-64 w-full">
            <Image
              src="/room2.png"
              alt="Room 2"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomInspiration;