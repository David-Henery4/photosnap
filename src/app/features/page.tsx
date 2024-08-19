import FeaturesHeader from "@/sections/features/FeaturesHeader";
import featuresData from "@/localData/featuresData";
import { FeaturesGrid, CallToAction } from "@/components/reusable";
import { FeaturesCard } from "@/components/reusable/cards";

const page = () => {
  return (
    <>
      <FeaturesHeader />
      <main className="w-full col-start-2 col-end-12 mt-16 mb-24">
        <FeaturesGrid isFullgrid={true}>
          {featuresData.map((featureItem) => {
            return (
              <FeaturesCard
                key={featureItem.id}
                isFullGrid={true}
                {...featureItem}
              />
            );
          })}
        </FeaturesGrid>
      </main>
      <CallToAction />
    </>
  );
};

export default page;
