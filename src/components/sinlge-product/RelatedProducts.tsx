import { Product } from '@/types'
import React from 'react'
import ProductCard from '../shop/ProductCard'

interface RelatedProductsProps {
  products: Product[]
}
export function RelatedProducts({ products }: RelatedProductsProps) {
  const sampledProducts: Product[] = products.slice(0,4)
  return (
    <div>
      <h2 className="text-black text-3xl font-medium flex justify-center m-8">Related Products</h2>

    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      {
        sampledProducts.map(product => <ProductCard key={product.title} {...product} />)
      }

    </div>
    </div>
  )
}
