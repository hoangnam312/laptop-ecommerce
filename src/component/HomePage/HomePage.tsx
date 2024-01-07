import React from "react";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProducts";
import ListAfterMarket from "./ListAfterMarket";
import { outstandingProducts } from "@/dummyData/Product";

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
          link="/hot"
          listOfProduct={outstandingProducts}
        />
        <ListProduct
          title="Sản phẩm mới"
          link="/hot"
          listOfProduct={outstandingProducts}
        />
        <ListProduct
          title="Sản phẩm đề xuất"
          link="/hot"
          listOfProduct={outstandingProducts}
        />
        <ListAfterMarket />
      </div>
    </div>
  );
};

export default HomePage;
