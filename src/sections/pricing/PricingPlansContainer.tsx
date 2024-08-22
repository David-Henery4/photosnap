import { MonthYearToggle, PlanCard, PlanGrid } from "@/components/pricing"
import pricingData from "@/localData/pricingData";

const PricingPlansContainer = () => {
  return (
    <main className="w-full max-w-[1110px] mx-auto py-16 col-start-2 col-end-12 flex flex-col items-center gap-10 smTab:py-28 smLap:gap-12 smLap:pt-[120px] smLap:pb-40">
      <MonthYearToggle />
      <PlanGrid>
        {pricingData.map((pricingPlan) => {
          return <PlanCard key={pricingPlan.id} {...pricingPlan} />;
        })}
      </PlanGrid>
    </main>
  );
}

export default PricingPlansContainer