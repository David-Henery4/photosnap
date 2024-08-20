interface PlanCardProps {
  id: number;
  name: "basic" | "pro" | "business";
  desc: string;
  pricePerMonth: number;
  pricePerYear: number;
  isActivePlan: boolean;
}

export default PlanCardProps