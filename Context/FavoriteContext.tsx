"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TFavorite, TFavoriteContext, TProduct } from "@/Types/Types";
import { createContext, ReactNode, useState } from "react";

export const FavoriteContext = createContext({} as TFavoriteContext);

function FavoriteProvider({ children }: { children: ReactNode }) {
  const [favoriteList, setFavoriteList] = useLocalStorage<TFavorite[]>(
    "favorites",
    []
  );

  const toggleToFavrite = (productInfo: TProduct) => {
    const checkItemInFavoriteList = favoriteList.find(
      (item) =>
        item.id === productInfo.id && item.category === productInfo.category
    );

    if (checkItemInFavoriteList) {
      const newFavoriteList = [...favoriteList].map((item) =>
        item.id === productInfo.id && item.category === productInfo.category
          ? favoriteList.filter(
              (FilterItem) => FilterItem.id !== productInfo.id
            )
          : { ...item }
      );
      setFavoriteList(newFavoriteList);
    } else {
      const newFavoriteList = [
        ...favoriteList,
        { ...productInfo, favoriteFlage: true },
      ];
      setFavoriteList(newFavoriteList);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoriteList, toggleToFavrite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteProvider;
