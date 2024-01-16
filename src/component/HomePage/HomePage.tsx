import React from "react";

import { outstandingProducts } from "@/dummyData/Product";

import ListProduct from "./ListProducts";
import ListCategory from "./ListCategory";
import ListAfterMarket from "./ListAfterMarket";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
      className="flex bg-no-repeat bg-contain items-center justify-center"
    >
      <div className="max-w-[1024px]">
        <ListCategory />
        <ListProduct
          title="Sản phẩm nổi bật"
          link="/category/hot"
          listOfProduct={outstandingProducts}
        />
        <ListProduct
          title="Sản phẩm mới"
          link="/category/new"
          listOfProduct={outstandingProducts}
        />
        <ListProduct
          title="Sản phẩm đề xuất"
          link="/category/suggest"
          listOfProduct={outstandingProducts}
        />
        <ListAfterMarket />
      </div>
    </div>
  );
};

export default HomePage;
