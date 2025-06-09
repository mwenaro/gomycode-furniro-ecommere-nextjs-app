import Image from 'next/image'
import React from 'react'

export default function NavigationTrail() {
  return (
    <div className='bg-orange-50 flex gap-5 text-zinc-400 h-20 px-8 py-6 '>
      <span>Home</span>
      <Image height={20} width={20} src="/images/arrow-icon.png" alt="Arrow icon" className='h-4 mt-1.5' />
      <span>Shop</span>
      <Image height={20} width={20} src="/images/arrow-icon.png" alt="Arrow icon" className='h-4 mt-1.5'/>
      <Image height={0} width={1} src="/images/line.png" alt="Grey Line" className='h-7' />
      <span className='text-black'>Asgaard Sofa</span>
    </div>
  )
}
