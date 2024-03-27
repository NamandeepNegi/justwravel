"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import SortingComponent from './SortingComponent';

export default function Product() {
    const [products, setProducts] = useState()
    const [sortBy, setSortBy] = useState('asc')

    const getProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const products = await response.json()
            setProducts(products)
        } catch (error) {
            console.log(`${error} error in fetching products`)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])


    // useeffect for sorting by price
    useEffect(() => {
        if (sortBy && products && products.length > 0) {
            const sorted = products?.sort((a, b) => {
                if (sortBy === 'desc') {
                    return a.price - b.price;
                } else if (sortBy === 'asc') {
                    return b.price - a.price;
                }
            })
            setProducts(sorted)
        }
    }, [sortBy, products])


    return (
        <div className='w-full'>
            <div className='mx-auto items-center flex flex-col px-10'>
                <h1 className='text-7xl font-bold'>Products</h1>
                <SortingComponent setSortBy={setSortBy} sortBy={sortBy} />
                <div className='flex flex-wrap justify-center items-center content-center gap-10 my-10 mx-10'>
                    {
                        products?.length > 0 && products.map((product) => <ProductCard key={product.id} productData={product} />)
                    }
                </div>
            </div>
        </div>
    );
} 