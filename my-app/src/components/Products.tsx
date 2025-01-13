// import Image from "next/image";
// import { client} from "@/sanity/lib/client";
// import { groq} from "next-sanity";
// import {urlFor} from "@/sanity/lib/image"


// export default async function DataDisplay (){
//     const products = await client.fetch(groq `*[_type=='product']` )
//     console.log(products)
//     return (
//         <div className="bg-[#f8f8f8] h-[36rem] mt-96 flex  ">
//             <div className="flex justify-center flex-col mx-56 gap-6 ">
//                 <h1 className="font-urban text-2xl font-semibold">Best Selling Products</h1>
//                 <div className="grid grid-cols-4">
//                     {products.map((product:any ,index:number)=>(
                        
//                          <div key={product._id || index} className="bg-white h-64 w-48 drop-shadow-lg ">
//                          <Image 
//                          src={urlFor(product?.images && product.images[0]).url()}
//                          alt="product.slug"
//                          width={100}
//                          height={100}
//                          className="object-cover h-32 mx-auto pt-10"
//                          />
//                          <div className="text-center flex flex-col my-9 ">
//                             <h2 className="text-[#595959] text-lg font-bold">{product.name}</h2>
//                             <h3 className="text-[#9c9c9c] text-[0.95rem]">${product.price}.00</h3>

//                          </div>
//                     </div>

//                     ))}
               
//                 </div>
//             </div>
//         </div>
//     )
// }




// import Image from "next/image";  
// import { client } from "@/sanity/lib/client";  
// import { groq } from "next-sanity";  
// import { urlFor } from "@/sanity/lib/image";  

// export default async function DataDisplay() {  
//     const products = await client.fetch(groq`*[_type == 'product']`);  
//     console.log(products); // Ensure it logs the expected data  

//     return (  
//         <div className="bg-[#f8f8f8] h-[36rem] mt-96 flex">  
//             <div className="flex justify-center flex-col mx-56 gap-6">  
//                 <h1 className="font-urban text-2xl font-semibold">Best Selling Products</h1>  
//                 <div className="grid grid-cols-4 gap-4"> {/* Add gap for spacing */}  
//                     {products.map((product: any, index: number) => (  
//                         <div key={product._id || index} className="bg-white h-64 w-48 drop-shadow-lg">  
//                             <Image   
//                                 src={urlFor(product?.images?.[0]).url()} // Use optional chaining here  
//                                 alt={product.slug ? product.slug : "Product Image"} // Better alt text  
//                                 width={200} // Increase width for better rendering  
//                                 height={200} // Increase height for better rendering  
//                                 className="object-cover h-32 mx-auto pt-10"  
//                             />  
//                             <div className="text-center flex flex-col my-3"> {/* Adjusted margin */}  
//                                 <h2 className="text-[#595959] text-lg font-bold">{product.name}</h2>  
//                                 <h3 className="text-[#9c9c9c] text-[0.95rem]">${product.price}.00</h3>  
//                             </div>  
//                         </div>  
//                     ))}  
//                 </div>  
//             </div>  
//         </div>  
//     );  
// }




import { client } from "@/sanity/lib/client";  
import { groq } from "next-sanity";  
import { urlFor } from "@/sanity/lib/image"; 
import Link from "next/link"; 
import Image from "next/image";

export default async function DataDisplay() {  
    const products = await client.fetch(groq`*[_type == 'product']`);  
    console.log('Fetched products:', products); // Log the fetched products  

    if (!products || products.length === 0) {  
        return <p>No products available.</p>; // Handle empty state  
    }  

    return (  
        <div className="bg-[#f8f8f8] h-[36rem] mt-96 flex">  
            <div className="flex justify-center flex-col mx-56 gap-6">  
                <h1 className="font-urban text-2xl font-semibold">Best Selling Products</h1>  
                <div className="grid grid-cols-4 gap-4">  
                    {products.map((product: any, index: number) => {  
                         const imageUrl = urlFor(product?.images?.[0]).url(); // Get the URL of the first image  
                         console.log('Image URL:', imageUrl); // Log the image URL  

                        return (  
                            <Link href={`/product/${product.slug.current}`}>
                            <div key={index} className="bg-white h-64 w-48 drop-shadow-lg">  
                                <Image   
                                    src={imageUrl}  
                                    alt={product.slug.current || "Product Image"}  
                                    width={100}  
                                    height={100}  
                                    className="object-cover h-32 mx-auto pt-10"  
                                />  
                                <div className="text-center flex flex-col my-8">  
                               <h2 className="text-[#595959] text-lg font-bold">{product.name}</h2>
                             <h3 className="text-[#9c9c9c] text-[0.95rem]">${product.price}.00</h3> 
                                </div>  
                            </div> 
                            </Link> 
                        );  
                    })}  
                </div>  
            </div>  
        </div>  
    );  
}