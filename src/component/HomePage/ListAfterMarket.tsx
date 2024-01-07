import React from "react";
import AfterMarket from "../common/AfterMarket";
import { afterMarket } from "@/dummyData/AfterMarket";

const ListAfterMarket = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl text-red-600 text-center font-bold mb-12">Hậu mãi</h2>
      <div className="grid grid-cols-3 gap-8">
        {afterMarket.map((item, index) => (
          <AfterMarket
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ListAfterMarket;
