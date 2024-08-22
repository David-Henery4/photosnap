import {
  PricingHeader,
  ComparisonContainer,
  PricingPlansContainer,
} from "@/sections/pricing";

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
