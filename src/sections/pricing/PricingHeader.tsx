import { TwoColImage, TwoColText } from "@/components/reusable/two-cols-comps";
import { Header2cols } from "@/components/reusable";
import { Heading, BaseText } from "@/components/reusable/text";
import {
  heroDeskLg,
  heroMobLg,
  heroTabLg
} from "../../../public/assets/pricing";

const PricingHeader = () => {
  return (
    <Header2cols direction="leftToRight" headerType="main">
      <TwoColImage
        alt="Silhouette of a woman adjusting a camera on a tripod at sunset."
        mobileSrc={heroMobLg}
        tabletSrc={heroTabLg}
        desktopSrc={heroDeskLg}
      />
      <TwoColText isHeader={true}>
        <Heading theme="dark" className="uppercase">
          pricing
        </Heading>
        <BaseText theme="dark" className="mt-4 xSmTab:mt-5">
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </BaseText>
      </TwoColText>
    </Header2cols>
  );
};

export default PricingHeader;
