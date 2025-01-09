import Image from "next/image";
import map from "@/public/images/european-map.jpg";

function CustomerAddress() {
  return (
    <div className="max-w-full flex items-center gap-20">
      {/* left  */}
      <div className="w-[50%] h-auto">
        <h2 className="text-4xl font-semibold">Your Address</h2>

        <form className="py-5 flex flex-col gap-y-10">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="tel" placeholder="Enter your phone number" />
          <input type="text" placeholder="Enter your address" />
        </form>
      </div>
      {/* right  */}
      <div className="group cursor-help w-full h-auto bg-secondary md:max-w-[50%]">
        <Image
          src={map}
          alt="map"
          width={100}
          height={100}
          quality={100}
          unoptimized
          className="w-full h-full opacity-70 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default CustomerAddress;
