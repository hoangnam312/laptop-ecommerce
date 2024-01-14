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
        <div className="grid grid-cols-5 gap-20">
          <div className="col-span-3">
            <Description />
          </div>
          <div className="col-span-2">
            <Specifications />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
