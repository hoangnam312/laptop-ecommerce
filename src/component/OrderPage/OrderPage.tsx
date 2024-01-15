import { useState } from "react";

import { Button, Divider, Input, Spacer, Textarea } from "@nextui-org/react";

import Label from "./Label";

const OrderPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const handlePlaceOrder = () => {
    // Xử lý đặt hàng, có thể gọi hàm callback từ props để truyền dữ liệu đặt hàng lên component cha
    console.log("Đặt hàng thành công!", {
      name,
      phone,
      contactInfo,
      address,
      note,
    });
  };

  return (
    <div className="mt-20 w-full ">
      <div className="border rounded-lg p-8 ">
        <h3 className="text-lg font-semibold mb-14">Thông tin đặt hàng</h3>
        <Input
          className="mb-10"
          label={<Label isRequired>Tên</Label>}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên của bạn"
          labelPlacement="outside"
        />
        <Input
          className="mb-10"
          label={<Label isRequired>Số điện thoại</Label>}
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Nhập số điện thoại của bạn"
          labelPlacement="outside"
        />
        <Input
          className="mb-10"
          label={<Label>Thông tin liên hệ khác</Label>}
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          placeholder="Nhập thông tin liên hệ khác (Facebook, Zalo, ...)"
          labelPlacement="outside"
        />
        <Input
          className="mb-5"
          label={<Label isRequired>Địa chỉ</Label>}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Nhập địa chỉ của bạn"
          labelPlacement="outside"
        />
        <Textarea
          label={<Label>Ghi chú</Label>}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Nhập ghi chú nếu cần"
          labelPlacement="outside"
        />

        <Spacer y={5} />

        <Divider />

        <Spacer y={5} />

        <Button color="primary" onClick={handlePlaceOrder} fullWidth>
          Đặt hàng
        </Button>
      </div>
    </div>
  );
};

export default OrderPage;
