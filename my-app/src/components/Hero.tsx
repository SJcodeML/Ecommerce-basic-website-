import Image from "next/image";
import airpods from "@/public/1.png";
import headingairpods from "@/public/Air Pods.png"

export default function Hero (){
    return (
        <div className="m-11 ">
            <div className="flex justify-center items-center"> 
              <Image
                src={headingairpods}
                alt="Airpods image"
                width={1100} 
                height={500}
                className="relative object-cover" 
                />
                <Image
                src={airpods}
                alt="Airpods image"
                width={900} 
                height={500}
                className="absolute top-48 left-72 object-cover"
                />
            </div>
        </div>
    )
}