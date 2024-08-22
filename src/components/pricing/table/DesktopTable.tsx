import { FourthHeading } from "@/components/reusable/text";
import FeatureProps from "@/types/featureProps";
import { CheckIcon } from "../../../../public/assets/pricing";

const DesktopTable = (feature: FeatureProps) => {

  return (
    <tr
      key={`${feature.id}-desk`}
      className="border-b border-lightGrey hidden mdTab:table-row"
    >
      <td>
        <FourthHeading theme="light">{feature.featureName}</FourthHeading>
      </td>
      {feature.plans.map((plan) => {
        return (
          <td key={plan.id} className="py-6">
            {plan.isIncluded && <CheckIcon className="mx-auto" />}
          </td>
        );
      })}
    </tr>
  );
}

export default DesktopTable