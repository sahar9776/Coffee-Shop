import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export type TLink = {
  id: number;
  name: string;
  image: StaticImageData;
  path: string;
};

export type TBenefit = {
  id: number;
  title: string;
  icon: IconType;
  description: string;
};

export type TProduct = {
  id: number;
  name: string;
  price: number;
  mainImg: StaticImageData;
  category: string;
  description: string;
};

export type TProductCart = TProduct & {
  quantity: number;
};

export type TCartContext = {
  cart: TProductCart[] | [];
  totalQuantity: number;
  totalPrice: number;
  addToCart: (productInfo: TProduct) => void;
  decrementItemfromCart: (productInfo: TProduct) => void;
  deleteItemFromCart: (id: number) => void;
};

export type TFavorite = TProduct & {
  favoriteFlage: true;
};

export type TFavoriteContext = {
  favoriteList: TFavorite[];
  toggleToFavrite: (productInfo: TProduct) => void;
};
