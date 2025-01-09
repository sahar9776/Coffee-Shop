import background from "@/public/images/DesktopBg.jpg";
import Image from "next/image";
import { Links } from "@/Static/Links";
import LinkItem from "./LinkItem";
import Link from "next/link";

function DesktopDesign() {
  return (
    <div className="max-w-full">
      <Image
        src={background}
        alt="Desktop Background"
        quality={100}
        fill
        unoptimized
        className="min-w-full min-h-full"
      />

      <Link href="/" className="text-white z-50">
        Coffee
      </Link>
      <div className="w-[25%] min-h-full bg-[#684b37b4] absolute top-0 right-0 flex flex-col items-center justify-center">
        <div className="flex items-start justify-around -mt-10 md:flex-col md:justify-center md:gap-10">
          {/* OFF setion  */}
          <div className="flex gap-3 items-end">
            <div className="w-24 h-36 rounded-t-full border-2 border-white shadow-md shadow-white/40 -ms-20 flex justify-center items-center">
              <h3 className="text-white font-semibold text-2xl">
                50% <br /> OFF
              </h3>
            </div>
            <div>
              <h2 className="text-white font-semibold text-4xl">Biggest OFF</h2>
              <p className="mt-3 text-black/65">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          {/* Links  */}
          {Links.map((item) => (
            <LinkItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DesktopDesign;
