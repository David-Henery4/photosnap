import FeaturesCardTypes from "@/types/featuresCardTypes";
import { ThirdHeading, BaseText } from "../text";

const FeaturesCard = (feature: FeaturesCardTypes) => {
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <feature.icon />
      <div className="text-center max-w-[457px]">
        <ThirdHeading theme="light">{feature?.title}</ThirdHeading>
        <BaseText className="mt-4" theme="light">{feature?.desc}</BaseText>
      </div>
    </div>
  );
};

export default FeaturesCard;
