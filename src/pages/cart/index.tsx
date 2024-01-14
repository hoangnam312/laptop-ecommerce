import CartPage from "@/component/CartPage";

const CartScreen = () => {
  return (
    <div className="my-20 flex items-center justify-center">
      <div className="max-w-[1024px]">
        <h1 className="text-2xl font-bold">Giỏ hàng</h1>
        <CartPage />
      </div>
    </div>
  );
};

export default CartScreen;
