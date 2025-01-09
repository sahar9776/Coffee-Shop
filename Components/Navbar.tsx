"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { Links } from "@/Static/Links";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const pathname = usePathname();

  return (
    pathname !== "/" && (
      <div className="max-w-full h-20 bg-black text-white">
        <div className="container">
          <div className="w-full h-full flex items-center justify-between">
            {/* site title - logo */}
            <div className=" w-full h-auto flex items-center">
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

            {/* Links  */}

            <div className="">
              <button className="md:hidden">
                <RxHamburgerMenu className="text-white text-3xl" />
              </button>

              <div className="hidden md:flex gap-10 ">
                {Links.map((item) => (
                  <Link
                    href={item.path}
                    key={item.id}
                    className={`${
                      pathname === item.path &&
                      "text-secondary border-b-2 border-secondary"
                    } text-2xl font-semibold hover:text-secondary`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Navbar;
