import Image from "next/image";

const images = [
  "/fur (1).png",
  "/fur (3).png",
  "/fur (4).png",
  "/fur (6).png",
  "/fur (7).png",
  "/fur (8).png",
  "/fur (9).png",
  "/fur (10).png",
];

const GallerySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Share your setup with</h2>
        <p className="text-xl font-semibold text-[#B88E2F] mt-2">
          #FuniroFurniture
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-40 md:h-60">
            <Image
              src={src}
              alt={`Gallery image ${index + 1} `}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
