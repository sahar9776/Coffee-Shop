import { TProductCart } from "@/Types/Types";
import Image from "next/image";
import { CartContext } from "@/Context/CartContext";
import { useContext } from "react";

function OrderItem({ item }: { item: TProductCart }) {
  const { addToCart, decrementItemfromCart, deleteItemFromCart } =
    useContext(CartContext);

  const checkQuantityBeforeDecrement = (item: TProductCart) => {
    if (item.quantity < 2) {
      deleteItemFromCart(item.id);
    } else {
      decrementItemfromCart(item);
    }
  };

  return (
    <div className="w-full h-auto border-2 border-white rounded-xl mt-5 flex gap-5 overflow-hidden">
      {/* image  */}
      <div className="w-[25%] h-auto bg-primary ms-20">
        <Image
          src={item.mainImg}
          alt="order image"
          width={100}
          height={100}
          quality={100}
          unoptimized
          className="w-full h-full"
        />
      </div>

      {/* title - suggested dessert  */}
      <div className="w-[75%] max-h-full p-5">
        <h3 className="text-2xl font-semibold ">{item.name}</h3>
        <h5 className="text-sm text-white/75 my-2">with Suggested Dessert </h5>

        {/* price -buttons minus and plus  */}
        <div className="flex items-center justify-between mt-5">
          <h4 className="text-xl font-semibold">
            Price : $ {(item.price * item.quantity).toFixed(2)}
          </h4>

          {/* buttons  */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => checkQuantityBeforeDecrement(item)}
              className="w-8 h-8 flex justify-center items-center border-2 border-secondary rounded-lg text-secondary text-xl font-semibold hover:bg-secondary hover:text-white"
            >
              -
            </button>
            <span className="">{item.quantity}</span>
            <button
              onClick={() => addToCart(item)}
              className="w-8 h-8 flex justify-center items-center border-2 border-secondary rounded-lg text-secondary text-xl font-semibold hover:bg-secondary hover:text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
