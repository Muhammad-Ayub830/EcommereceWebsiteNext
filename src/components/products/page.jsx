'use client'
import React, { useEffect, useState } from 'react'
import p1 from '../../../public/imges/1.png'
import Image from 'next/image'
import Link from 'next/link'
const Products = ({ items ,plenght }) => {
        


    // If items is undefined or empty, show loading
    if (!items || items.length === 0) {
        return <p className='container mx-auto px-[10%]'>Loading products...</p>;
    }

    let h;
    if (plenght === 'all') {
        h = items.slice(); // all
    } else {
        h = items.slice(0, 8); // first 8
        console.log('all is not applied');
    }
    return (
        <div className='products container mx-auto px-[10%] mb-[100px] gap-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))]'>
            {
                h.map((product, index) => (
                  <Link href={`/products/${product.id}`}> <div className="product ">
                        <div className="relative w-[220px] h-[250px]">
                            <Image src={product.image} alt="img" fill className="object-contain" />
                        </div>
                        <h3 className='font-bold mt-3'>{product.title}</h3>
                        <p>{product.description}</p>
                        <p className='flex items-center gap-3 '>{product.price}
                            {/* <span className="text-[#e9e1e9]">$40.00</span> */}
                        </p>
                    </div> </Link> 
                ))
            }
        </div>
    )
}

export default Products
