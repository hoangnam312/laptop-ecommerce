import Product from "../common/Product";
import { PRODUCT_TYPE } from "@/config/type";
import Link from "next/link";

const ListProduct = ({ title, link, listOfProduct }: {
  title: string,
  link: string,
  listOfProduct: PRODUCT_TYPE[]
}) => {
  return (
    <div className="my-20 p-4 bg-red-500 border-radius rounded-3xl">
      <div className="mb-4 flex justify-between">
        <h2 className="font-bold text-2xl text-white">{title}</h2>
        <Link className="text-white font-bold" href={link}>Xem thêm</Link>
      </div>
      <div className="grid grid-cols-5 gap-4 ">
        {listOfProduct.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
