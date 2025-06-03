interface BlogCardProps {
  image: string;
  tags: "wood" | "Handmade";
  title: string;
}

export function BlogCard({ image, tags, title }: BlogCardProps) {
  return (
    <div className="mb-10">
      <img src={image} alt={title} className="w-full rounded-lg mb-4" />
      <div className="flex items-center text-sm text-[#9F9F9F] space-x-4 mb-4">
        <img src="/blogimages/dashicon.png" alt="dashicon" />
        <span>Admin</span>
        <img src="/blogimages/calender.png" alt="calender" />
        <span>14 Oct 2022</span>
        <img src="/blogimages/tag.png" alt="tag" />
        <span>{tags}</span>
      </div>
      <h2 className="text-2xl font-semibold text-black mb-4">{title}</h2>
      <p className="text-[#9F9F9F] mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae
        ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
        aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a
        iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
        Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et
        ultrices neque ornare aenean euismod elementum.
      </p>
      <a
        href="#"
        className="text-black font-medium border-b-1 border-black pb-0.5 inline-block hover:border-black transition-colors duration-200"
      >
        Read more
      </a>
    </div>
  );
}
