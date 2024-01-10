import Description from "./Description";
import Options from "./Options";
import Slide from "./Slide";
import Specifications from "./Specifications";

const DetailPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Detail Screen</h1>
      <div>
        <div className="grid grid-cols-2 gap-20">
          <Slide />
          <Options />
        </div>
        <div className="grid grid-cols-2 gap-20">
          <Description />
          <Specifications />
        </div>
      </div>
    </>
  );
};

export default DetailPage;
