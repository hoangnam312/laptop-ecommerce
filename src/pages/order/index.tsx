import OrderPage from "@/component/OrderPage";

const OrderScreen = () => {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="max-w-[1024px] w-full">
        <h1 className="text-2xl font-bold">Đặt hàng</h1>
        <OrderPage />
      </div>
    </div>
  );
};

export default OrderScreen;
