"use client"

import { useParams } from 'next/navigation'
import  ProductDetails from '@/components/ProductDetail'
import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const page = async () => {
    const { slug }:any = useParams();
    const products = await client.fetch(groq `*[_type=="product"]`);
    const product = products.find((product:any)=>product.slug.current == slug);

    // console.log(product);

    

  return (
    <>
        
        <ProductDetails product={product} />
    </>

  )
}

export default page








// "use client";  

// import { useParams } from 'next/navigation';  
// import ProductDetail from '@/components/ProductDetail';  
// import React, { useEffect, useState } from 'react';  
// import { groq } from 'next-sanity';  
// import { client } from '@/sanity/lib/client';  

// interface Product {  
//     slug: { current: string };  
//     title: string;  
//     price: string; // or number if applicable  
//     description: string;  
//     images: { url: string }[];  
// }  

// const Page = () => {  
//     const { slug } = useParams<{ slug: string }>(); // Specify the type for useParams  
//     const [product, setProduct] = useState<Product | null>(null);  
//     const [loading, setLoading] = useState(true);  

//     useEffect(() => {  
//         const fetchProduct = async () => {  
//             try {  
//                 const products: Product[] = await client.fetch(groq`*[_type=="product"]`);  
//                 const foundProduct = products.find((product) => product.slug.current === slug);  
//                 setProduct(foundProduct || null); // Set to null if not found  
//             } catch (error) {  
//                 console.error("Error fetching products:", error);  
//             } finally {  
//                 setLoading(false);  
//             }  
//         };  

//         fetchProduct();  
//     }, [slug]);  

//     if (loading) {  
//         return <div>Loading...</div>; // Loading state  
//     }  

//     if (!product) {  
//         return <div>Product not found</div>; // Handle case where product is not found  
//     }  

//     return (  
//         <>  
//             {/* <ProductDetail product={product} />   */}
//             <ProductDetail key={product.description} product={product} />
//         </>  
//     );  
// }  

// export default Page;

