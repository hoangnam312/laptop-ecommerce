import { faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faFeather,
  faGamepad,
  faHeadphonesSimple,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export enum ENUM_CATEGORY {
  GRAPHIC = "graphic",
  BUSINESS = "business",
  LIGHT = "light",
  GAMING = "gaming",
  MACBOOK = "macbook",
  ACCESSORIES = "accessories",
}

export const CATEGORIES = [
  {
    title: "Đồ họa",
    icon: faPalette,
  },
  {
    title: "Doanh nhân",
    icon: faBriefcase,
  },
  {
    title: "Mỏng nhẹ",
    icon: faFeather,
  },
  {
    title: "Gaming",
    icon: faGamepad,
  },
  {
    title: "Macbook",
    icon: faApple,
  },
  {
    title: "Phụ kiện",
    icon: faHeadphonesSimple,
  },
];

export const INFORMATION = {
  phone: "0123456789",
};
