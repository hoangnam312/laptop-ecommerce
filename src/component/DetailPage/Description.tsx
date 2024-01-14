import { markdownContent } from "@/dummyData/Product";
import Markdown from "react-markdown";

const Description = () => {
  return (
    <div className="mt-20">
      <div className="border rounded-lg p-4 bg-gray-100">
        <h2 className="text-red-600 text-xl font-bold mb-4 text-center">
          Đặc điểm nổi bật
        </h2>
        <Markdown>{markdownContent}</Markdown>
      </div>
    </div>
  );
};

export default Description;
