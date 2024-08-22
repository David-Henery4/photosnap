"use client";
import { MonthYearToggle, PlanCard, PlanGrid } from "@/components/pricing";
import pricingData from "@/localData/pricingData";
import { useState } from "react";

const PricingPlansContainer = () => {
  const [isYearly,setIsYearly] = useState(false)
  const [pricingList, setPricingList] = useState(pricingData);
  // const [currentPlanId, setCurrentPlanId] = useState(pricingData[1].id);
  return (
    <main className="w-full max-w-[1110px] mx-auto py-16 col-start-2 col-end-12 flex flex-col items-center gap-10 smTab:py-28 smLap:gap-12 smLap:pt-[120px] smLap:pb-40">
      <MonthYearToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      <PlanGrid>
        {pricingList.map((pricingPlan) => {
          return (
            <PlanCard
              key={pricingPlan.id}
              isYearly={isYearly}
              setPricingList={setPricingList}
              {...pricingPlan}
            />
          );
        })}
      </PlanGrid>
    </main>
  );
};

export default PricingPlansContainer;
