"use client";

import Image from "next/image";
import { TProduct } from "@/Types/Types";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext";
import { FavoriteContext } from "@/Context/FavoriteContext";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";

function ProductItem({ item }: { item: TProduct }) {
  const { addToCart } = useContext(CartContext);

  const { favoriteList, toggleToFavrite } = useContext(FavoriteContext);

  const FavoriteProduct = favoriteList.find(
    (FindItem) => FindItem.id === item.id
  );

  return (
    <div className="w-[360px] h-[464px] relative bg-primary text-white mx-auto">
      <Image
        src={item.mainImg}
        alt="mobile Background"
        width={100}
        height={100}
        quality={100}
        unoptimized
        className="w-full h-full absolute left-0 top-0 opacity-50"
      />

      {/* Introduction section  */}
      <div className="w-[70%] h-[392px] bg-primary/70 border-4 border-white rounded-t-full shadow-sm shadow-white absolute left-[50%] top-[35%] -translate-x-[50%] -translate-y-[35%] flex flex-col justify-end items-center py-5 px-3">
        <Link href={`/details-product/${item.id}`} className="text-3xl font-semibold">{item.name}</Link>
        <p className="opacity-90 mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur,
          ipsa.
        </p>
        <p className="text-xl font-semibold mt-5">Price : $ {item.price}</p>
        <button
          onClick={() => addToCart(item)}
          className="w-full text-xl font-semibold mt-6 py-[10px] border-2 border-white rounded-2xl duration-700 hover:bg-white/20"
        >
          Add to Cart
        </button>
      </div>

      {/* Suggested dessert */}
      <div className="w-[70%] h-auto absolute left-[50%] bottom-4 -translate-x-[50%] text-start flex items-center opacity-85">
        <h5 className="w-full text-sm"> Dessert : Affogo</h5>
        <div className="w-full h-[2px] bg-white"></div>
      </div>

      {/* Tag */}
      <div className="w-[60%] h-auto absolute -left-20 bottom-[344px] opacity-85 flex items-center rotate-90">
        <h5 className="w-full text-base"> Coffee</h5>
        <div className="w-full h-[2px] bg-white"></div>
      </div>

      {/* favorite  */}
      <button
        className="absolute right-5 top-5 text-2xl"
        onClick={() => toggleToFavrite(item)}
      >
        {FavoriteProduct ? (
          <MdFavorite className="text-red-500" />
        ) : (
          <MdFavoriteBorder className="text-white" />
        )}
      </button>
    </div>
  );
}

export default ProductItem;
