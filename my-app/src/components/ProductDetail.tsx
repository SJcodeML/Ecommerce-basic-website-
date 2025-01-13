
 
 import { product } from "@/sanity/schemas/product-schema";
import { FaPlus } from "react-icons/fa6";
 import { FiMinus } from "react-icons/fi";
 import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ProductDetails = ({Product}:any)=>{
    return (
        <div className="">
            <div className="grid grid-cols-2 text-left border-black border-2 h-[30rem] mx-auto mt-9 w-[48rem] pt-20">
                {/* first half */}
                
                 <div>
                     {/* top  */}
                    <div className="h-[450px] flex items-center mb-[25px]">
                    <Image
                        loader={()=>urlFor(product.images[0]).url()}
                        src={urlFor(product.images[0]).url()}
                        alt={product.images[0]}
                        width={350}
                        height={350}
                        className='object-cover mx-auto'
                    />
                    </div>

                    {/*bottom */}
                     <div></div>





                 </div>

                {/* second half */}
                <div className="p-5">
                    <h2 className="text-[#474747] text-[2rem] font-extrabold leading-4">sdkfkjfkd</h2>
                    <h3 className="text-[#a9a9a9] leading-10">RM1099.00</h3>
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