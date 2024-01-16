import { PATH } from "@/config/common";
import { useRouter } from "next/router";
import { Card, Image } from "@nextui-org/react";

const Product = ({
  id,
  name,
  price,
  image,
}: {
  id: string | number;
  name: string;
  price: string;
  image: string;
}) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(PATH.DETAIL + "/" + id)}>
      <Card
        id="card-id"
        className="group p-4 border transition-transform transform hover:scale-105"
      >
        <div className="relative h-40 overflow-hidden rounded-md group-hover:opacity-75">
          <Image src={image} alt={name} height="160px" width="100%" />
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold group-hover:text-indigo-600 transition">
            {name}
          </h2>
          <p className="text-red-600 font-bold text-right">{price}</p>
        </div>
      </Card>
    </div>
  );
};

export default Product;
