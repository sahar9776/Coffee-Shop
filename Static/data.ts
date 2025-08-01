// CoffeeBenefitList
import { GiBrain } from "react-icons/gi";
import { BsHeartPulseFill } from "react-icons/bs";
import { GiLiver } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { TBenefit } from "@/Types/Types";

// ProductList
import { TProduct } from "@/Types/Types";
import coffeeImg1 from "@/public/images/coffeeImg1.jpg";
import coffeeImg2 from "@/public/images/coffeeImg2.jpg";
import coffeeImg3 from "@/public/images/coffeeImg3.jpg";
import dessertImg1 from "@/public/images/dessertImg1.jpg";
import dessertImg2 from "@/public/images/dessertImg2.jpg";
import dessertImg3 from "@/public/images/dessertImg3.jpg";

// Links
import { TLink } from "@/Types/Types";
import coffeeImage from "@/public/images/coffee.jpg";
import dessertImage from "@/public/images/dessert.jpg";
import cartImage from "@/public/images/cart.jpg";



export const CoffeeBenefitList:TBenefit[] = [
  {
    id: 1,
    title: "Supports brain health",
    icon: GiBrain,
    description:
      "Lorem ipsum dolor sit amet Deserunt fuga perferendis nisi, repellat voluptatum .",
  },
  {
    id: 2,
    title: "Supports heart health",
    icon: BsHeartPulseFill,
    description:
      "Lorem ipsum dolor sit amet Deserunt fuga perferendis nisi, repellat voluptatum .",
  },
  {
    id: 3,
    title: "Supports Liver health",
    icon: GiLiver,
    description:
      "Lorem ipsum dolor sit amet Deserunt fuga perferendis nisi, repellat voluptatum .",
  },
  {
    id: 4,
    title: "Improve energy levels",
    icon: ImPower,
    description:
      "Lorem ipsum dolor sit amet Deserunt fuga perferendis nisi, repellat voluptatum .",
  },
];

export const ProductList: TProduct[] = [
  {
    id: 1,
    name: "Espresso Panna",
    price: 4.5,
    mainImg: coffeeImg1,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 2,
    name: "Galão Coffee",
    price: 3.33,
    mainImg: coffeeImg2,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 3,
    name: "Irish Coffee",
    price: 3.43,
    mainImg: coffeeImg3,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 4,
    name: "Latte",
    price: 5.32,
    mainImg: coffeeImg2,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 5,
    name: "Americano",
    price: 3.8,
    mainImg: coffeeImg1,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 6,
    name: "Black Coffee",
    price: 3.25,
    mainImg: coffeeImg3,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 7,
    name: "Black Eye",
    price: 4.43,
    mainImg: coffeeImg2,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 8,
    name: "Chocolate Cake",
    price: 3.13,
    mainImg: coffeeImg1,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 9,
    name: "Cappuccino",
    price: 3.32,
    mainImg: coffeeImg3,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 10,
    name: "Cortado",
    price: 3.43,
    mainImg: coffeeImg3,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 11,
    name: "Doppio",
    price: 2.5,
    mainImg: coffeeImg2,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 12,
    name: "Drip Coffee",
    price: 3.25,
    mainImg: coffeeImg1,
    category: "coffee",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 13,
    name: "Affogato",
    mainImg: dessertImg1,
    price: 1.2,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 14,
    name: "Brownie",
    mainImg: dessertImg2,
    price: 4,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 15,
    name: "Cappuccino",
    mainImg: dessertImg3,
    price: 1.7,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 16,
    name: "Chocolate Covered",
    mainImg: dessertImg3,
    price: 1.2,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 17,
    name: "Cookies",
    mainImg: dessertImg1,
    price: 3.2,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 18,
    name: "Crispy Cookies",
    mainImg: dessertImg2,
    price: 2.9,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 19,
    name: "Fudge",
    mainImg: dessertImg1,
    price: 3.6,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 20,
    name: "Mocha Pecan",
    mainImg: dessertImg3,
    price: 3.9,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
  {
    id: 21,
    name: "NoBake cookies",
    mainImg: dessertImg2,
    price: 3.9,
    category: "dessert",
    description:
      "Lorem ipsum dolor, sit amet eli eli consectetur adipisicing elit. Non aspernatur reprehenderit dolor rem laboriosam eum.",
  },
];

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

