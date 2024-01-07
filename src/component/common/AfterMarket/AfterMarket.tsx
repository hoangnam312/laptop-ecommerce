// components/PostPurchaseOptions.js
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AfterMarket = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: IconDefinition;
}) => {
  return (
    <div>
      <div className="text-center mb-8 text-7xl">
        <FontAwesomeIcon className="text-sky-400" icon={icon} />
      </div>
      <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AfterMarket;
