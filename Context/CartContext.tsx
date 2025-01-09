"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TCartContext, TProduct, TProductCart } from "@/Types/Types";
import { createContext, ReactNode, useEffect, useState } from "react";

export const CartContext = createContext({} as TCartContext);

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useLocalStorage<TProductCart[]>("cart",[]);

  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const checkExist = (id: number) => {
    return cart.find((item) => item.id === id);
  };

  const deleteItemFromCart = (id: number) => {
    const newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  };

  const addToCart = (productInfo: TProduct) => {
    const checkExistItemInCart = checkExist(productInfo.id);

    if (checkExistItemInCart) {
      const newCart = [...cart].map((item) =>
        item.id === productInfo.id
          ? { ...item, quantity: item.quantity + 1 }
          : { ...item }
      );
      setCart(newCart);
    } else {
      const newCart = [...cart, { ...productInfo, quantity: 1 }];
      setCart(newCart);
    }
  };

  const decrementItemfromCart = (productInfo: TProduct) => {
    const checkExistItemInCart = checkExist(productInfo.id);

    if (checkExistItemInCart) {
      const newCart = [...cart].map((item) =>
        item.id === productInfo.id
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item }
      );
      setCart(newCart);
    } else {
      const newCart = [...cart];
      setCart(newCart);
    }
  };

  // total quantity
  useEffect(() => {
    const total = cart.reduce<number>(
      (totalValue: number, currentValue: TProductCart) => {
        return totalValue + currentValue.quantity;
      },
      0
    );
    setTotalQuantity(total);
  }, [cart]);

  // total price
  useEffect(() => {
    const total = cart.reduce<number>(
      (totalValue: number, currentValue: TProductCart) => {
        return totalValue + currentValue.price * currentValue.quantity;
      },
      0
    );
    setTotalPrice(total);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decrementItemfromCart,
        deleteItemFromCart,
        totalQuantity,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
