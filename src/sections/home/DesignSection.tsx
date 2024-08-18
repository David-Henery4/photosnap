import { Header2cols } from "@/components/reusable";
import { Heading, BaseText } from "@/components/reusable/text";
import {
  designImgMob,
  designImgTab,
  designImgDesk,
  designImgMobLg,
  designImgTabLg,
  designImgDeskLg
} from "../../../public/assets/home";
import Button from "@/components/reusable/buttons/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Image from "next/image";
import { TwoColImage, TwoColText } from "@/components/reusable/two-cols-comps";

const DesignSection = () => {
  return (
    <Header2cols direction="leftToRight" headerType="sub">
      <TwoColImage
        alt="Man in center of image, with a pitch black background, adjusting a high tech camera."
        desktopSrc={designImgDeskLg}
        mobileSrc={designImgMobLg}
        tabletSrc={designImgTabLg}
      />
      <TwoColText>
        <Heading theme="light" headingType="h2Lg">
          DESIGNED FOR EVERYONE
        </Heading>
        <BaseText theme="light" className="mt-4">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </BaseText>
        <Button buttonType="primary" theme="primaryLight" className="mt-6">
          VIEW THE STORIES
          <ArrowIcon stroke="#000" />
        </Button>
      </TwoColText>
    </Header2cols>
  );
};

export default DesignSection;
