import PlanCardProps from "@/types/planCardTypes";
import { SecondaryHeading, BaseText, Heading } from "../reusable/text";
import Button from "../reusable/buttons/Button";
import { Dispatch, SetStateAction } from "react";

type themeChangeReturn = "dark" | "light";

interface PlanCardAndToggle extends PlanCardProps {
  isYearly: boolean;
  setPricingList: Dispatch<SetStateAction<PlanCardProps[]>>;
}

const PlanCard = ({
  desc,
  isActivePlan,
  name,
  pricePerMonth,
  pricePerYear,
  isYearly,
  id,
  setPricingList,
}: PlanCardAndToggle) => {
  //
  const handleThemeChange = (): themeChangeReturn =>
    isActivePlan ? "dark" : "light";
  //
  const handleSetActivePricingPlan = () => {
    setPricingList((prev) => {
      return prev.map((plan) => {
        id === plan.id
          ? (plan.isActivePlan = true)
          : (plan.isActivePlan = false);
        return plan;
      });
    });
  };
  //
  return (
    <div
      className={`w-full pt-14 px-[22px] pb-10 grid gap-10 justify-items-center text-center transition-all smTab:text-left smTab:justify-items-start smTab:p-10 smLap:justify-items-center smLap:text-center smLap:pt-14 ${
        isActivePlan ? "bg-black scale-105" : "bg-lighterGrey scale-100"
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
          {isYearly
            ? `$${pricePerYear.toFixed(2)}`
            : `$${pricePerMonth.toFixed(2)}`}
        </Heading>
        <BaseText theme={handleThemeChange()}>per month</BaseText>
      </div>
      <div className="w-full max-w-[245px] mx-auto smTab:m-0 smTab:max-w-[270px]">
        <Button
          className="uppercase w-full px-[37px] py-3 justify-center"
          buttonType="secondary"
          theme={isActivePlan ? "secondaryDark" : "secondaryLight"}
          onClick={() => handleSetActivePricingPlan()}
        >
          pick plan
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
