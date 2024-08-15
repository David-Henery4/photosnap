import { FeaturesGrid } from "@/components/reusable";
import { FeaturesCard } from "@/components/reusable/cards";
import featuresData from "@/localData/featuresData";
import FeaturesCardTypes from "@/types/featuresCardTypes";

const FeaturesSection = () => {
  const featuresArrayData: FeaturesCardTypes[] = featuresData.slice(0, 3);
  return (
    <section className="px-6 py-20">
      <FeaturesGrid>
        {featuresArrayData.map((feature) => {
          return (
            <FeaturesCard
              key={feature?.id}
              icon={feature.icon}
              desc={feature.desc}
              title={feature.title}
              id={feature.id}
            />
          );
        })}
      </FeaturesGrid>
    </section>
  );
};

export default FeaturesSection;
