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
        alt="Man standing on end of a dock looking out over a misty lake with his arms down by his side holding camera."
        mobileSrc={heroMobLg}
        tabletSrc={heroTabLg}
        desktopSrc={heroDeskLg}
      />
      <TwoColText>
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
