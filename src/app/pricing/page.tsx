import {
  PricingHeader,
  ComparisonContainer,
  PricingPlansContainer,
} from "@/sections/pricing";
import pricingData from "@/localData/pricingData";

const page = () => {
  return (
    <>
      <PricingHeader />
      <PricingPlansContainer />
      <ComparisonContainer />
    </>
  );
};

export default page;
