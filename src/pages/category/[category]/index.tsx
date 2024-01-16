import { useRouter } from "next/router";
import ListPage from "@/component/ListPage";
import { ENUM_CATEGORY } from "@/config/common";

const ListScreen = () => {
  const router = useRouter();

  const renderTitle = () => {
    switch (router.query.category) {
      case ENUM_CATEGORY.GRAPHIC:
        return "Laptop đồ họa";
      case ENUM_CATEGORY.BUSINESS:
        return "Laptop doanh nhân";
      case ENUM_CATEGORY.GAMING:
        return "Laptop Gaming";
      case ENUM_CATEGORY.LIGHT:
        return "Laptop mỏng nhẹ";
      case ENUM_CATEGORY.MACBOOK:
        return "Macbook";
      case ENUM_CATEGORY.ACCESSORIES:
        return "Phụ kiện laptop";
      default:
        return "Sản phẩm";
    }
  };

  return (
    <div className="my-20 flex items-center justify-center">
      <div className="max-w-[1024px]">
        <h1 className="text-2xl font-bold">{renderTitle()}</h1>
        <ListPage />
      </div>
    </div>
  );
};

export default ListScreen;
