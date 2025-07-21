import background from "@/public/images/mobileBg.jpg";
import Image from "next/image";
import LinkItem from "./LinkItem";
import { Links } from "@/Static/data";

function MobileDesign() {
  return (
    <div>
      <Image
        src={background}
        alt="mobile Background"
        quality={100}
        fill
        unoptimized
        className="max-w-full min-h-full"
      />

      <div className="w-full h-auto bg-[#684b37b4] absolute bottom-0 left-0">
        <div className="flex items-start justify-around -mt-10">
          {Links.map((item) => (
            <LinkItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileDesign;
