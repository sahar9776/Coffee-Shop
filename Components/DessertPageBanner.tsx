"use client";

import Image from "next/image";
import dessertBg from "@/public/images/dessertPageBg.jpg";
import { RiCake3Fill } from "react-icons/ri";
import { IoMdIceCream } from "react-icons/io";

function DessertPageBanner() {
  return (
    <div className="relative max-w-full h-96 md:h-[420px] text-white flex bg-primary text-center md:text-start">
      <div className="container flex py-10 absolute top-0 left-0 md:left-10 z-50">
        {/* left : title - define  */}
        <div className="w-full md:max-w-[50%] h-auto">
          <h1 className="text-6xl font-extrabold">Dessert Time</h1>
          <p className="text-white/90 mt-8 md:pe-5">
            Lorem ipsum dolor sit amet repellat voluptatum consequuntur ullam,
            nam officia hic quas officiis, earum labore voluptates neque
            voluptatum officiis illum consequuntur numquam!
          </p>

          {/* buttons   */}
          <div className="flex justify-center md:justify-start gap-2 mt-16 md:mt-12">
            <button className="flex gap-1 text-xl font-semibold border-2 border-white rounded-xl px-5 py-3 duration-700 ease-in-out hover:bg-white/90 hover:text-black hover:border-black">
              <IoMdIceCream className="text-2xl" />
              Ice Cream
            </button>
            <button className="flex gap-1 text-xl font-semibold border-2 border-white rounded-xl px-5 py-3 duration-700 ease-in-out hover:bg-white/90 hover:text-black hover:border-black">
              <RiCake3Fill className="text-2xl" />
              Cutom dessert
            </button>
          </div>
        </div>
      </div>
      {/* right : Image  */}
      <Image
        src={dessertBg}
        alt="dessert Background"
        width={100}
        height={100}
        quality={100}
        unoptimized
        className="w-full md:max-w-[50%] md:h-[420px] h-auto absolute top-0 right-0 blur-sm md:blur-none z-10"
      />
    </div>
  );
}

export default DessertPageBanner;
