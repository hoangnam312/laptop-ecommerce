import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center bg-sky-950 text-white">
      <div className="flex mt-4 px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1024px]">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <Input variant="underlined" label="Contact us" />
            <p className="max-w-xs mt-4 text-sm ">
              Kết nối với chúng tôi qua các kênh sau:
            </p>
            <p className="mt-4">
              Số điện thoại: <span className="text-xl">123-456-7890</span>
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
              <a className="hover:opacity-75" href="/about">
                Category 1
              </a>
              <a className="hover:opacity-75" href="/meet">
                Category 2
              </a>
              <a className="hover:opacity-75" href="/history">
                Category 3
              </a>
              <a className="hover:opacity-75" href="/career">
                Category 4
              </a>
            </nav>
          </div>
          <div>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
