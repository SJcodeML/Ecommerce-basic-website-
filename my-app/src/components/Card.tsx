import { urlFor } from "@/sanity/lib/image"; 
import Link from "next/link"; 
import Image from "next/image";



export default function Card({product}:any){
    const imageUrl = urlFor(product?.images?.[0]).url(); // Get the URL of the first image  
                        console.log('Image URL:', imageUrl); 
    return (
        <div>
             <Link href={`/product/${product.slug.current}`}>
                            <div  className="bg-white h-64 w-48 drop-shadow-lg">  
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





        </div>

    )
}