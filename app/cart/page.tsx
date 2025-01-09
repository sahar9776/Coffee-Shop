"use client";

import CustomerAddress from "@/Components/CustomerAddress";
import OrderItem from "@/Components/OrderItem";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { HiCreditCard } from "react-icons/hi";

function Cart() {
  const { cart, totalPrice, totalQuantity } = useContext(CartContext);

  return (
    <div className="ma-w-full py-10">
      <div className="container">
        {cart && cart.length !== 0 ? (
          <div className="">
            {/* address section  */}
            <CustomerAddress />

            {/* orders item  */}
            <div className="py-10 border-b-2 border-white">
              <h2 className="text-4xl font-semibold">Orders</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
                {cart.map((item) => (
                  <OrderItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            {/* total price  */}
            <div className="w-full h-auto flex justify-between items-center py-10">
              <div className="">
                <h3 className="text-xl text-white/90 font-semibold mb-5">
                  Quantity : {totalQuantity}
                </h3>
                <h2 className="text-3xl font-semibold">
                  Total Price : $ {totalPrice.toFixed(2)}
                </h2>
              </div>
              <div className="flex gap-5">
                <button className="px-10 py-3 border-2 border-white rounded-xl text-xl font-semibold flex items-end gap-2 duration-700 ease-in-out hover:bg-white/90 hover:text-black hover:border-black">
                  <GiMoneyStack className="text-3xl" />
                  Cash Payment
                </button>
                <button className="group px-10 py-3 border-2 border-white rounded-xl text-xl font-semibold flex items-end gap-2 duration-700 ease-in-out hover:bg-white/90 hover:text-black hover:border-black">
                  <HiCreditCard className="text-3xl" />
                  Credit Payment
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full text-4xl text-center font-semibold flex gap-1 justify-center items-center my-20">
            <h1 className="">Cart is empty</h1>
            <BsCart4 className="text-5xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
