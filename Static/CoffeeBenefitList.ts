import { GiBrain } from "react-icons/gi";
import { BsHeartPulseFill } from "react-icons/bs";
import { GiLiver } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { TBenefit } from "@/Types/Types";

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
