import {
  PricingHeader,
  ComparisonContainer,
  PricingPlansContainer,
} from "@/sections/pricing";
import { CallToAction } from "@/components/reusable";

const page = () => {
  return (
    <>
      <PricingHeader />
      <PricingPlansContainer />
      <ComparisonContainer />
      <CallToAction/>
    </>
  );
};

export default page;
