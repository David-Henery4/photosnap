import { FourthHeading } from "@/components/reusable/text";
import { CheckIcon } from "../../../../public/assets/pricing";
import FeatureProps from "@/types/featureProps";

const MobTable = (feature: FeatureProps) => {
  return (
    <tr
      key={`${feature.id}-mob`}
      className="border-b border-lightGrey mdTab:hidden"
    >
      <td className="py-6">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th colSpan={3}>
                <FourthHeading theme="light">
                  {feature.featureName}
                </FourthHeading>
              </th>
            </tr>
          </thead>
          <tbody className="block mt-4">
            <tr className="text-[10px] text-black/50 font-bold grid grid-cols-threeEvenCols">
              {feature.plans.map((plan) => {
                return (
                  <th key={plan.id} className="uppercase">
                    {plan.planName}
                  </th>
                );
              })}
            </tr>
            <tr className="grid grid-cols-threeEvenCols mt-2">
              {feature.plans.map((plan) => {
                return (
                  <td key={plan.id}>{plan.isIncluded && <CheckIcon />}</td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default MobTable;
