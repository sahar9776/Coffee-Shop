// Type
import { TLink } from "@/Types/Types";

// Images
import coffeeImage from "@/public/images/coffee.jpg";
import dessertImage from "@/public/images/dessert.jpg";
import cartImage from "@/public/images/cart.jpg";

export const Links: TLink[] = [
  {
    id: 1,
    name: "Coffee",
    image: coffeeImage,
    path:"/coffee"
  },
  {
    id: 2,
    name: "Dessert",
    image: dessertImage,
    path:"/dessert"
  },
  {
    id: 3,
    name: "Cart",
    image: cartImage,
    path:"/cart"
  },
];
