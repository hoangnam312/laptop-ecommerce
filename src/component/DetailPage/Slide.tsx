import { slideProducts } from "@/dummyData/Product";
import { Image } from "@nextui-org/react";
import { CSSProperties } from "react";
import { Carousel } from "react-responsive-carousel";

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
      <Carousel
        {...getConfigurableProps()}
        // renderThumbs={(children) => console.log(children)}
        // autoPlay
        // renderIndicator={(onClickHandler, isSelected, index) => {
        //   if (isSelected) {
        //     return (
        //       <li
        //         style={{ ...indicatorStyles, background: "#000" }}
        //         // aria-label={`Selected: ${label} ${index + 1}`}
        //         // title={`Selected: ${label} ${index + 1}`}
        //       />
        //     );
        //   }
        //   return (
        //     <li
        //       style={indicatorStyles}
        //       onClick={onClickHandler}
        //       onKeyDown={onClickHandler}
        //       value={index}
        //       key={index}
        //       role="button"
        //       tabIndex={0}
        //       // title={`${label} ${index + 1}`}
        //       // aria-label={`${label} ${index + 1}`}
        //     />
        //   );
        // }}
      >
        {slideProducts.map((slide, index) => (
          <div key={index}>
            {/* <Image src={slide.image} alt={slide.name} height={"160px"} width="100%" /> */}
            <img src={slide.image} alt={slide.name} />
          </div>  
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
