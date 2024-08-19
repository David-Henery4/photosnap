import { TwoColImage, TwoColText } from "@/components/reusable/two-cols-comps";
import { Header2cols } from "@/components/reusable";
import { Heading, BaseText } from "@/components/reusable/text";
import {
  featuresHeroImgMob,
  featuresHeroImgDesk,
  featuresHeroImgTab,
  featuresHeroImgDeskLg,
  featuresHeroImgMobLg,
  featuresHeroImgTabLg
} from "../../../public/assets/features";

const FeaturesHeader = () => {
  return (
    <Header2cols direction="leftToRight" headerType="main">
      <TwoColImage
        alt="Man standing on end of a dock looking out over a misty lake with his arms down by his side holding camera."
        mobileSrc={featuresHeroImgMobLg}
        tabletSrc={featuresHeroImgTabLg}
        desktopSrc={featuresHeroImgDeskLg}
      />
      <TwoColText>
        <Heading theme="dark" className="uppercase">
          FEATURES
        </Heading>
        <BaseText theme="dark" className="mt-4 smTab:mt-5">
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </BaseText>
      </TwoColText>
    </Header2cols>
  );
};

export default FeaturesHeader;
