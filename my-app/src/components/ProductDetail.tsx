"use client"
 

import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import React, { useContext, useState } from 'react';


interface ImageType {  
    url: string;  
}  

interface Product {  
    images: ImageType[];  
    title: string;  
    price: string; // use number if applicable  
    description: string;  
}  

const ProductDetails = ({ product }: {product:any |undefined} )=>{
    const [index,setIndex]= useState(0)
    if (!product || !product.images || product.images.length === 0) {  
        return <div>Loading... or no images available</div>; // Handle loading or no data state  
    } 
     
     return (
        <div className="">
            <div className="grid grid-cols-2 text-left border-black border-2 h-[30rem] mx-auto mt-9 w-[58rem] pt-20">
                {/* first half */}
                
                 <div>
                     {/* top  */}
                    <div  className="flex items-center mb-[25px]">
                    <Image
                        key={product.description}
                        loader={()=>urlFor(product.images[index]).url()}
                        src={urlFor(product.images[index]).url()}
                        alt="gjhgug kiuh"
                        width={200}
                        height={200}
                        className='object-cover object-top mx-auto'
                        
                    />
                    </div>

                    {/*bottom */}
                     <div className="flex gap-[5px] justify-center">
                        {product.images?.map((item:any,i:number)=>(
                            <Image
                            src={urlFor(product.images[i]).url()}
                            alt="ksdjfksdhndcnm"
                            width={100}
                            height={100}
                            className=" object-cover object-top h-20 mx-auto border rounded-xl hover:curosor-pointer"
                            onClick={()=>setIndex(i)}
                        />
                        ))}
                     </div>





                 </div>

                {/* second half */}
                <div className="p-5">
                    <h2 className="text-[#474747] text-[2rem] font-extrabold leading-4">{product.name}</h2>
                    <h3 className="text-[#a9a9a9] leading-10">${product.price}.00</h3>
                    <h3 className="leading-10 py-8">Lorem Ipsum</h3>
                    <div className="flex border-black border-2 items-center justify-between p-2 h-10 w-40">
                    <FaPlus className="text-[0.75rem]"/>
                    <h1 className="font-bold">1</h1>
                    <FiMinus className="text-[0.75rem]" />
                    </div>

                    <button className=" border-black border-2 p-1 h-10 w-40 mt-5">Add to cart</button>
                </div>

            </div>
        </div>
    )
}


export default  ProductDetails; 