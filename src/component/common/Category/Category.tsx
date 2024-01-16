import { useRouter } from "next/router";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const Category = ({
  item,
}: {
  item: {
    icon: IconDefinition;
    title: string;
    link: string;
  };
}) => {
  const router = useRouter();

  return (
    <Card
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
      className="backdrop-blur-2xl bg-transparent"
      onClick={() => router.push(item.link)}
    >
      <CardBody className="overflow-visible p-0 flex justify-center align-middle items-center">
        <div className="text-center mt-8 mb-4 text-6xl">
          <FontAwesomeIcon className="text-sky-400" icon={item.icon} />
        </div>
      </CardBody>
      <CardFooter className="text-small justify-center">
        <b>{item.title}</b>
      </CardFooter>
    </Card>
  );
};

export default Category;
