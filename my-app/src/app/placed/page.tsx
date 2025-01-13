import Link from "next/link";
import { GoArrowRight } from "react-icons/go";


export default function Login(){
    return (
        <div className="flex flex-col items-center justify-center ">
            <h3 className="text-[#4f46e5] pt-28 text-2xl">Success</h3>
            <h1 className="text-[#1c1c1c] font-urban font-extrabold pt-6 text-[3rem]">Your Order has been placed</h1>
            <h3 className="">ThankYou for Your Purchase!</h3>
            <div className="w-44 gap-1 h-12 text-center m-auto mt-20 bg-[#4f46e5] rounded-md flex items-center justify-center ">
            <Link href="/" className=" text-white ">Continue Shopping</Link>
            <GoArrowRight className="text-white"/>
            </div>
        </div>
    )
}