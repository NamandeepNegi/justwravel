'use client'

import { useEffect, useState } from "react"

export default function SingleProductPage({ params }) {
    const [product, setProduct] = useState()
    const getDetailsOfSingleProduct = async () => {
        if (params.Id) {
            try {
                const result = await fetch(`https://fakestoreapi.com/products/${params.Id}`)
                const data = await result.json()
                setProduct(data)

            } catch (error) {
                console.log(`${error} error in getting single product`)
            }
        }
    }

    useEffect(() => {
        getDetailsOfSingleProduct()
    }, [])

    const [isOpen, setIsOpen] = useState(true); // Initially open on page load

    const handleClose = () => setIsOpen(false);
    return <>
        {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-md p-4 w-96">
                    <p className="text-gray-700 font-bold text-2xl">{product?.title}</p>
                    <p className="text-gray-700 mt-2">Category: {decodeURIComponent(params?.Category)}</p>
                    <p className="text-gray-700 mt-2">Product Id: {params?.Id}</p>
                    <button className="px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={handleClose}>
                        Close
                    </button>
                </div>
            </div>
        )}
    </>
}