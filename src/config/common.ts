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

export enum PATH {
  GRAPHIC = "/category/graphic",
  BUSINESS = "/category/business",
  LIGHT = "/category/light",
  GAMING = "/category/gaming",
  MACBOOK = "/category/macbook",
  ACCESSORIES = "/category/accessories",
  HOME = "/",
  DETAIL = "/detail",
  CART = "/cart",
  ORDER = "/order",
}

export const CATEGORIES = [
  {
    title: "Đồ họa",
    icon: faPalette,
    link: PATH.GRAPHIC,
  },
  {
    title: "Doanh nhân",
    icon: faBriefcase,
    link: PATH.BUSINESS,
  },
  {
    title: "Mỏng nhẹ",
    icon: faFeather,
    link: PATH.LIGHT,
  },
  {
    title: "Gaming",
    icon: faGamepad,
    link: PATH.GAMING,
  },
  {
    title: "Macbook",
    icon: faApple,
    link: PATH.MACBOOK,
  },
  {
    title: "Phụ kiện",
    icon: faHeadphonesSimple,
    link: PATH.ACCESSORIES,
  },
];

export const INFORMATION = {
  phone: "0123456789",
};
