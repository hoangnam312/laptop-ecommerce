import { CATEGORIES } from "@/config/common";
import React from "react";
import Category from "../common/Category";
import styles from "./ListCategory.module.css";

const ListCategory = () => {
  return (
    <div className="mt-40 mb-60" id="list-category">
      <h2 className={`text-3xl text-white text-center font-bold mb-12 ${styles.typewriter}`}>
        Bạn đang tìm kiếm một chiếc máy như thế nào...
      </h2>
      <div className=" grid grid-cols-7 gap-10">
        {CATEGORIES.map((category, index) => (
          <Category key={index} item={category} />
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
