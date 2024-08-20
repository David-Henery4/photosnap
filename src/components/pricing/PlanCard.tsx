import PlanCardProps from "@/types/planCardTypes";
import { SecondaryHeading, BaseText, Heading } from "../reusable/text";
import Button from "../reusable/buttons/Button";

type themeChangeReturn = "dark" | "light"

const PlanCard = ({
  desc,
  isActivePlan,
  name,
  pricePerMonth,
  pricePerYear,
}: PlanCardProps) => {
  //
  const handleThemeChange = (): themeChangeReturn =>
    isActivePlan ? "dark" : "light";
  //
  return (
    <div
      className={`w-full pt-14 px-[22px] pb-10 grid gap-10 justify-items-center text-center smTab:text-left smTab:justify-items-start smTab:p-10 smLap:justify-items-center smLap:text-center smLap:pt-14 ${
        isActivePlan ? "bg-black" : "bg-lighterGrey"
      }`}
    >
      <div className="max-w-[270px] mx-auto smTab:col-start-1 smTab:col-end-2 smTab:m-0 smLap:col-auto">
        <SecondaryHeading theme={handleThemeChange()} className="capitalize">
          {name}
        </SecondaryHeading>
        <BaseText theme={handleThemeChange()} className="mt-[18px]">
          {desc}
        </BaseText>
      </div>
      <div className="smTab:col-start-2 smTab:col-end-3 smLap:col-auto">
        <Heading theme={handleThemeChange()} headingType="h2Lg">
          ${pricePerMonth.toFixed(2)}
        </Heading>
        <BaseText theme={handleThemeChange()}>per month</BaseText>
      </div>
      <div className="w-full max-w-[245px] mx-auto smTab:m-0 smTab:max-w-[270px]">
        <Button
          className="uppercase w-full px-[37px] py-3 justify-center"
          buttonType="secondary"
          theme={isActivePlan ? "secondaryDark" : "secondaryLight"}
        >
          pick plan
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
