import Image from "next/image";
import background from "@/public/images/mobileBg.jpg";
import { BiSolidDownload } from "react-icons/bi";
import { CoffeeBenefitList } from "@/Static/data";

function CoffeePageBanner() {
  return (
    <div className="relative w-full min-h-[650px] md:min-h-[600px]">
      {/* Title and Benefits  */}
      <div className="w-full md:max-w-[65%] h-auto text-center md:text-start absolute md:top-0 md:left-0 mt-24 md:mt-0 z-50">
        <h1 className="text-6xl font-extrabold">Coffee Time</h1>
        <p className="text-white/90 mt-8 md:max-w-[70%]">
          Lorem ipsum dolor sit amet repellat voluptatum consequuntur ullam, nam
          officia hic quas officiis, earum labore voluptates neque voluptatum
          officiis illum consequuntur numquam!
        </p>
        {/* button  */}
        <button className="flex items-center justify-center gap-1 mx-auto mt-10 border-2 border-white/95 text-white/95 text-xl font-semibold rounded-xl px-8 py-4 duration-700 ease-in-out hover:bg-white/90 hover:text-black hover:border-black md:hidden">
          Download Benefits
          <BiSolidDownload className="text-2xl" />
        </button>
      </div>
      {/* image  */}
      <Image
        src={background}
        alt="mobile Background"
        width={100}
        height={100}
        quality={100}
        unoptimized
        className="w-full md:max-w-[35%] h-auto absolute top-0 right-0 blur-sm md:blur-none z-10"
      />
      {/* Benefits  */}
      <div className="w-[75%] h-56 hidden md:flex md:gap-5 absolute top-72 left-0">
        {CoffeeBenefitList.map((item) => (
          <div className="w-full h-full relative" key={item.id}>
            <div className="w-24 h-24 rounded-full bg-white absolute -top-12 left-[50%] -translate-x-[50%] z-20 md:flex justify-center items-center">
              <item.icon className="text-4xl text-black" />
            </div>

            <div
              className={`${
                item.id % 2 == 0 ? "bg-primary" : "bg-secondary"
              } w-full h-52 text-center flex flex-col justify-center items-center p-1 absolute bottom-0 left-[50%] -translate-x-[50%] z-10`}
            >
              <h4 className="font-semibold capitalize">{item.title}</h4>
              <p className="text-xs mt-3">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoffeePageBanner;
