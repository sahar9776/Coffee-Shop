"use client";

import { CartContext } from "@/Context/CartContext";
import { ProductList } from "@/Static/ProductList";
import { TProduct } from "@/Types/Types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext } from "react";

function DetailsProducts() {
  const { id } = useParams();

  const detailProduct = ProductList.find(
    (item) => item.id == Number(id)
  ) as TProduct;

  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-full h-screen bg-primary relative">
      {/* left  */}
      <div className="w-full h-full p-10 pe-0">
        <div className="w-full h-full border-8 border-e-0 border-secondary"></div>
      </div>

      {/* title  */}
      <h1 className="text-3xl md:text-6xl font-extrabold text-primary absolute top-14 right-10 z-50">
        {detailProduct.name}
      </h1>

      {/* middle  */}
      <Image
        src={detailProduct.mainImg}
        alt="mobile Background"
        width={100}
        height={100}
        quality={100}
        unoptimized
        className="w-[50%] md:w-[30%] h-auto absolute right-[20%] top-5 z-10"
      />

      {/* info  */}
      <div className="w-96 h-60 bg-secondary/50 absolute top-80 left-[50%] -translate-x-[50%] md:left-[28%] md:translate-x-0 z-50 p-5">
        <p className="text-xl">{detailProduct.description}</p>
        {/* price -add to cart button  */}
        <div className="w-full h-20 mt-2 flex items-center gap-1">
          <p className="w-full text-xl font-semibold">
            Price : $ {detailProduct.price}
          </p>
          <button onClick={()=>addToCart(detailProduct)} className="w-full h-12 font-semibold bg-primary/80 rounded-xl hover:bg-primary">
            Add To Cart
          </button>
        </div>
      </div>

      {/* right  */}
      <div className="w-[50%] md:w-[40%] h-full bg-secondary absolute top-0 right-0"></div>
    </div>
  );
}

export default DetailsProducts;
