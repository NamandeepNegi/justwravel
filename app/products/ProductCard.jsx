import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function ProductCard({ productData }) {
  return (

    <div className="rounded-lg shadow-md bg-white p-4 flex flex-col items-center">
      <h2 className='text-3xl font-medium lg:w-96'>{productData.title}</h2>
      <Image
        src={productData?.image}
        alt="Product image"
        className=''
        width={200}
        height={50}
      />
      <p className='font-bold text-2xl'> Price: $$ {productData.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <p className='font-semibold'>Category: {productData.category}</p>
      <div className='lg:w-96'>
        <ReactReadMoreReadLess
          readMoreStyle={{ whiteSpace: "nowrap", color: 'blue', cursor: 'pointer' }}
          readLessStyle={{ whiteSpace: "nowrap", color: 'blue', cursor: 'pointer' }}
          charLimit={80}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
        >
          {productData.description}
        </ReactReadMoreReadLess></div>
      <p>rating count: {productData.rating.count} | rating: {productData.rating.rate}</p>
      <Link href={`/products/${productData.category}/${productData.id}`}>
        <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Details
        </button>
      </Link>
    </div>

  );
}