"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    // value
    const jsonValue =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;

    // setValue
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === "function") {
      return initialValue as () => T;
    } else {
      return initialValue;
    }
  });

  //   save in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
