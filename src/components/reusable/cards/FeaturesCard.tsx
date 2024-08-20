import FeaturesCardTypes from "@/types/featuresCardTypes";
import { ThirdHeading, BaseText } from "../text";

interface FeaturesCardProps extends FeaturesCardTypes {
  isFullGrid?: boolean
}

const FeaturesCard = (feature: FeaturesCardProps) => {
  //
  return (
    <div className={`flex flex-col justify-center items-center gap-12 ${feature.isFullGrid ? "max-w-[350px]" : ""}`}>
      <feature.icon />
      <div className="text-center max-w-[457px] smLap:max-w-[350px]">
        <ThirdHeading theme="light">{feature?.title}</ThirdHeading>
        <BaseText className="mt-4" theme="light">
          {feature?.desc}
        </BaseText>
      </div>
    </div>
  );
};

export default FeaturesCard;
