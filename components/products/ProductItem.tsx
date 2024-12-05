import { Product } from '@/lib/models/ProductModels'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function ProductItem({product}: {product : Product}) {
  return (
    <div className='card bg-base-content shadow-xl mb-4'>
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image 
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className='object-cover h-64 w-full'
          />
        </Link>
      </figure>
      <div className='card-body text-white mx-auto'>
        <Link href={`/product/${product.slug}`}>
          <h2 className='card-title font-normal'>{product.name}</h2>
        </Link>
        <p className='mb-2 mx-auto'>{product.brand}</p>
        <div className='card-actions flex items-center justify-between'>
          <span className='text-2xl'>{product.price} Rial</span>
        </div>
      </div>
    </div>
  )
}
