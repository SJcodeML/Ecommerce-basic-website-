import React from "react";
import { BsCartCheckFill } from "react-icons/bs";
import Link from "next/link";

export default function Navbar (){
    return (
        <div className="h-24 w-full  border-b-2 shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)] flex items-center ">
            {/* Navbar  */}
            <div className=" h-14 w-[42rem] mx-auto flex justify-between items-center ">
                <Link href="/" className="font-urban text-2xl font-bold">shop</Link>
                <div className="relative">
                <BsCartCheckFill className="h-20 w-8 "/>
                <span className="w-[18px] h-[18px] bg-red-500 text-white text-[0.75rem] absolute top-5 text-center left-[0.95rem] rounded-full font-bold">0</span>
                </div>
            </div>
        </div>
    )
}