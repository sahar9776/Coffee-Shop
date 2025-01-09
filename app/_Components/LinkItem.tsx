import { TLink } from "@/Types/Types";
import Image from "next/image";
import Link from "next/link";

function LinkItem({ name, image, path }: TLink) {
  return (
    <div className="w-full h-auto flex flex-col items-center md:flex-row md:gap-2">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        quality={100}
        unoptimized
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary"
      />
      <Link
        href={path}
        className="font-semibold text-black/80 my-1 text-xl md:text-3xl"
      >
        {name}
      </Link>
    </div>
  );
}

export default LinkItem;
