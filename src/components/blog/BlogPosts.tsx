interface BlogPostsProps {
  image: string;
  title: string;
}

export function BlogPosts({ image, title }: BlogPostsProps) {
  return (
    <div>
      <div className="flex items-start space-x-4 ">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 rounded-md object-cover flex-shrink-0"
        />
        <div className="flex flex-col justify-center">
          <span className="text-sm font-medium text-gray-900 leading-tight">
            {title}
          </span>
          <span className="text-xs text-gray-500 mt-1">03 Aug 2022</span>
        </div>
      </div>
    </div>
  );
}
