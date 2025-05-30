"use client"
import { footer } from "motion/react-client";
import Link from "next/link";

export default function Footer() {
  return (
 <footer className=" w-full border-t border-slate-500 h-[200px]">
      <div className=" relative flex items-center ml-10 mt-6 gap-2">
         <img
          src="/assest/inventralogo.jpg"
          alt="Inventra Logo"
          className=" h-10 object-cover rounded-full w-10"
        />
        <div className=" absolute flex-col justify-start ml-12 mt-1  ">
          <h1 className="text-base font-bold md:text-2xl">Inventra</h1>
          <h2 className=" text-base font-normal md:text-sm ">
            Join Us and Take Control of Your Assets !!
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-center items-center -mt-10 ml-48 text-lg font-normal ">
        <Link href="/about">
        About Us
        </Link>
        <Link href="/contact">
          Contact us
        </Link>
      </div>
 </footer>
   
  );
}
