import { useEffect, useState } from "react";

import { productOnCart } from "@/dummyData/Product";
import { Button, Image, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";

export interface CartType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage = () => {
  const [cart, setCart] = useState<CartType[]>([]);

  useEffect(() => {
    setCart(productOnCart);
  }, []);

  const handleIncrease = (id: number) => {
    const newCart = [...cart];
    const foundIndex = newCart.findIndex((item) => item.id === id);
    newCart[foundIndex].quantity += 1;
    setCart(newCart);
  };

  const handleDecrease = (id: number) => {
    const newCart = [...cart];
    const foundIndex = newCart.findIndex((item) => item.id === id);
    if (newCart[foundIndex].quantity > 1) {
      newCart[foundIndex].quantity -= 1;
    }
    setCart(newCart);
  };

  const [discountCode, setDiscountCode] = useState("");

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleApplyDiscount = () => {
    // !TODO: xử lý khi người dùng nhập mã giảm giá  
  };

  const handleContinue = () => {
    // !TODO: chuyển sang màn order 
  };

  const getCount = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity * item.price;
    });
    return count;
  };

  return (
    <div className="mt-20 w-full">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-3">
          <Table fullWidth={true}>
            <TableHeader>
              <TableColumn>Sản phẩm</TableColumn>
              <TableColumn>Mô tả</TableColumn>
              <TableColumn>Giá</TableColumn>
              <TableColumn>Số lượng</TableColumn>
              <TableColumn>Thành tiền</TableColumn>
            </TableHeader>
            <TableBody>
              {cart?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width="100"
                      height="100"
                    />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <button
                        className="px-2 py-1 bg-yellow-400 text-white rounded-l"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        className="px-2 py-1 bg-green-500 text-white rounded-r"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>{item.price * item.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="col-span-2">
          <div className=" border rounded-xl p-8 border-grey-100">
            <h2 className="text-lg font-semibold mb-4">Tổng thanh toán</h2>

            <div className="flex items-center mb-4">
              <span className="flex-1">Tổng tiền:</span>
              <span className="font-semibold">{getCount()} đ</span>
            </div>

            <div className="mb-4 flex items-center">
              <Input
                label="Nhập mã giảm giá:"
                type="text"
                id="discountCode"
                value={discountCode}
                onChange={handleDiscountCodeChange}
                className="mr-4"
              />
              <Button color="secondary" onClick={handleApplyDiscount}>
                Áp dụng
              </Button>
            </div>
            <Button
              color="primary"
              className="w-full text-lg font-bold mt-5"
              onClick={handleContinue}
            >
              Tiếp tục
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
