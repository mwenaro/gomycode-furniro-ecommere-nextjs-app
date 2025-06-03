import React from 'react'
import { BlogCard } from './BlogCard'

export function BlogList() {
  return (
    <div className='flex flex-col gap-10 w-full'>
      <BlogCard
      image="blogimages/image1.png"
      tags="wood"
      title="Going all-in with millennial design"
      />
      <BlogCard
      image="blogimages/image2.png"
      tags="Handmade"
      title="Exploring new ways of decorating"
      />
      <BlogCard
      image="blogimages/image3.png"
      tags="wood"
      title="Handmade pieces that took time to make"
      />
     
    </div>
  )
}
