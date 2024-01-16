import { Button, Input } from "@nextui-org/react";
import { CATEGORIES, INFORMATION } from "@/config/common";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-sky-950 text-white">
      <div className="flex mt-4 px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1024px]">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="flex flex-row items-baseline">
              <Input
                className="dark mr-4"
                variant="underlined"
                label="Liên hệ với chúng tôi"
              />
              <Button>Gửi</Button>
            </div>
            <p className="max-w-xs mt-4 text-sm ">
              Kết nối với chúng tôi qua các kênh sau:
            </p>
            <p className="mt-4">
              Số điện thoại:{" "}
              <span className="text-xl ml-2">{INFORMATION.phone}</span>
            </p>
            <div className="flex mt-4 space-x-6 ">
              <a
                className="hover:opacity-75"
                href="facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="flex mt-4 space-x-6 ">
              <a
                className="hover:opacity-75"
                href="zalo.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Zalo </span>
                {/* <image src="/zalo.png" alt="zalo" /> */}
                {/* TODO: bổ sung thêm zalo  */}
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <p className="font-bold text-inherit text-5xl">TNT</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2">
          <div>
            <nav className="flex flex-col space-y-2 text-sm">
              {CATEGORIES.map((category) => (
                <a
                  key={category.title}
                  className="hover:opacity-75"
                  href={category.link}
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </div>
          {/* <div>
            <nav className="flex flex-col space-y-2 text-sm ">
              <a className="hover:opacity-75" href="/about">
                surface
              </a>
              <a className="hover:opacity-75" href="/meet">
                xps
              </a>
              <a className="hover:opacity-75" href="/history">
                dell
              </a>
              <a className="hover:opacity-75" href="/career">
                yoga
              </a>
            </nav>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
