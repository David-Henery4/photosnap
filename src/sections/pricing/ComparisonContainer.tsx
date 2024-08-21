import { CheckIcon } from "../../../public/assets/pricing";
import { FourthHeading } from "@/components/reusable/text";
import featuresComparisonData from "@/localData/featuresComparisonData";

const ComparisonContainer = () => {
  //
  return (
    <section className="w-full pb-16 col-start-2 col-end-12 text-left">
      <table className="w-full table-auto border-spacing-y-4">
        <thead>
          <tr>
            <th className="border-b border-b-black pb-6">THE FEATURES</th>
          </tr>
        </thead>
        <tbody>
          {featuresComparisonData.map((feature) => {
            return (
              <tr key={feature.id} className="border-b-lightGrey border-b">
                <td className="py-6">
                  <table className="w-full table-auto ">
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
                            <td key={plan.id}>
                              {plan.isIncluded && <CheckIcon/>}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonContainer;
