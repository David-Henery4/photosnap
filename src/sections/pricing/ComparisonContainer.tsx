import featuresComparisonData from "@/localData/featuresComparisonData";
import {
  MobTable,
  DesktopHeaders,
  DesktopTable,
} from "@/components/pricing/table";
import { Heading } from "@/components/reusable/text";

const ComparisonContainer = () => {
  //
  return (
    <section className="w-full max-w-[1110px] mx-auto pb-16 col-start-2 col-end-12 text-left mdTab:pb-28 smLap:pb-40">
      <Heading
        theme="light"
        headingType="h2Lg"
        className="text-center mb-16 hidden mdTab:block"
      >
        COMPARE
      </Heading>
      <table className="w-full table-auto border-spacing-y-4">
        <thead>
          <tr className="border-b border-b-black">
            <th className="pb-6">THE FEATURES</th>
            <DesktopHeaders />
          </tr>
        </thead>
        <tbody>
          {featuresComparisonData.map((feature) => {
            return (
              <>
                <DesktopTable {...feature} />
                <MobTable {...feature} />
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default ComparisonContainer;
