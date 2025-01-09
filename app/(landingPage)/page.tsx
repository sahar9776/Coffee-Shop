import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import DesktopDesign from "../_Components/DesktopDesign";
import MobileDesign from "../_Components/MobileDesign";

function LandingPage() {
  return (
    <div className="max-w-full">
      {/* site title - logo */}
      <div className=" w-full h-auto absolute top-1 md:top-5 left-1 md:left-5 z-50 flex items-center">
        <Image
          src={logo}
          alt="logo"
          quality={100}
          width={100}
          height={100}
          unoptimized
          className="w-20 h-20"
        />
        <Link href="/" className="text-4xl font-semibold text-white ">
          Coffe <span className="text-secondary">Shop</span>
        </Link>
      </div>

      {/* mobile Design  */}
      <div className="block md:hidden">
        <MobileDesign />
      </div>

      {/* Desktop Design  */}
      <div className="hidden md:block">
        <DesktopDesign />
      </div>
    </div>
  );
}

export default LandingPage;
