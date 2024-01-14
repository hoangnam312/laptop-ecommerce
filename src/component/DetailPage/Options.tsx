import { INFORMATION } from "@/config/common";
import { optionColor, optionProduct } from "@/dummyData/Product";
import { faCartPlus, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@nextui-org/react";

const Options = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {optionProduct.map((item, index) => (
          <div key={index} className="border rounded-lg p-2 text-center">
            <span className="font-bold">{item.ram}GB</span> -
            <span className="font-bold">{item.ssd}GB</span>
            <p className="text-center">{item.price}</p>
          </div>
        ))}
      </div>
      <h3 className="mt-8 mb-4 font-bold text-lg">Chọn màu sắc</h3>
      <div className="grid grid-cols-3 gap-4">
        {optionColor.map((item, index) => (
          <div key={index} className="border rounded-lg p-2 text-center">
            <span>{item.color}</span>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-4">
          <Button color="primary" size="lg" className="h-16">
            <div className="flex flex-col align-center">
              <div className="font-bold text-xl">Mua ngay</div>
              <div className="text-sm">
                <FontAwesomeIcon
                  size="sm"
                  icon={faPhoneFlip}
                  className="mr-2"
                />
                {INFORMATION.phone}
              </div>
            </div>
          </Button>
          <Button color="primary" variant="bordered" className="h-16 text-lg">
            Thêm vào giỏ hàng
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Options;
