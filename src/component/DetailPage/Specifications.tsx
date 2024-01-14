import { optionSpecification } from "@/dummyData/Product";

const Specifications = () => {
  return (
    <div className="mt-20 border rounded-lg p-4 bg-gray-100">
      <h2 className="text-lg mb-4 text-center font-bold text-red-600">
        Thông số kỹ thuật
      </h2>
      <ul>
        {optionSpecification.map((spec, index) => (
          <li
            key={index}
            className={`flex justify-between first:rounded-t-lg last:rounded-b-lg p-3 ${
              index % 2 === 0 ? "bg-gray-200" : "bg-white"
            }`}
          >
            <span className="font-medium">{spec.name}:</span>
            <span>{spec.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Specifications;
