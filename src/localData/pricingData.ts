import PlanCardProps from "@/types/planCardTypes";

const pricingData: PlanCardProps[] = [
  {
    id: 1,
    name: "basic",
    desc: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    pricePerMonth: 19,
    pricePerYear: 190,
    isActivePlan: false,
  },
  {
    id: 2,
    name: "pro",
    desc: "More advanced features available. Recommended for photography veterans and professionals.",
    pricePerMonth: 39,
    pricePerYear: 390,
    isActivePlan: true,
  },
  {
    id: 3,
    name: "business",
    desc: "Additional features available such as more detailed metrics. Recommended for business owners.",
    pricePerMonth: 99,
    pricePerYear: 990,
    isActivePlan: false,
  },
]

export default pricingData