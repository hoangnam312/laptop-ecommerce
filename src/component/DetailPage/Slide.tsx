import { CSSProperties } from "react";

import { Carousel } from "react-responsive-carousel";

import { Image } from "@nextui-org/react";
import { slideProducts } from "@/dummyData/Product";

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: true,
  useKeyboardArrows: true,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  // dynamicHeight: true,
  emulateTouch: true,
  autoFocus: false,
  thumbWidth: 100,
  // selectedItem: 0,
  interval: 2000,
  transitionTime: 500,
  swipeScrollTolerance: 5,
  // dynamicHeight: true,
});

const indicatorStyles: CSSProperties = {
  background: "#fff",
  width: 8,
  height: 8,
  display: "inline-block",
  margin: "0 8px",
};

const ImgSlider = ({ url, name }: { url: string; name: string }) => (
  <div>
    <Image src={url} alt={name} height={"160px"} width="100%" />
  </div>
);

const Slide = () => {
  return (
    <div className="bg-blue-100">
      <Carousel {...getConfigurableProps()}>
        {slideProducts.map((slide, index) => (
          <div key={index}>
            {/* <Image src={slide.image} alt={slide.name} height={"160px"} width="100%" /> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={slide.image} alt={slide.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
