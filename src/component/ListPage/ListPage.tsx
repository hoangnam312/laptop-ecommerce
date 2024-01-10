import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Pagination,
} from "@nextui-org/react";
import { ENUM_SORT } from ".";
import { listProducts } from "@/dummyData/Product";
import Product from "../common/Product";

const ListPage = () => {
  const [sort, setSort] = useState<ENUM_SORT>();

  const handleSort = (key: ENUM_SORT) => {
    setSort(key as ENUM_SORT);
  };

  const renderSortTitle = () => {
    switch (sort) {
      case ENUM_SORT.NEWS:
        return "Mới nhất";
      case ENUM_SORT.OUTSTANDING:
        return "Xem nhiều nhất";
      case ENUM_SORT.LOWEST_PRICE:
        return "Giá thấp đến cao";
      case ENUM_SORT.HIGHEST_PRICE:
        return "Giá cao đến thấp";
      default:
        return "Sắp xếp theo";
    }
  };

  return (
    <div>
      {/* Filter  */}
      <div className="flex my-8 justify-end">
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">{renderSortTitle()}</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              onAction={(key) => handleSort(key as ENUM_SORT)}
            >
              <DropdownItem key={ENUM_SORT.NEWS}>Mới nhất</DropdownItem>
              <DropdownItem key={ENUM_SORT.OUTSTANDING}>
                Xem nhiều nhất
              </DropdownItem>
              <DropdownItem key={ENUM_SORT.LOWEST_PRICE}>
                Giá thấp đến cao
              </DropdownItem>
              <DropdownItem key={ENUM_SORT.HIGHEST_PRICE}>
                Giá cao đến thấp
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {/* List */}
      <div>
        <div className="grid grid-cols-5 gap-4">
          {listProducts.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>

      {/* Pagination  */}
      <div className="flex mt-8 justify-end">
        <Pagination color="primary" showControls total={10} initialPage={1} />
      </div>
    </div>
  );
};

export default ListPage;
