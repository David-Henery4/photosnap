import { Heading, BaseText } from "@/components/reusable/text";
import { Header2cols } from "@/components/reusable";
import {
  storiesImgMob,
  storiesImgTab,
  storiesImgDesk,
} from "../../../public/assets/home";
import Image from "next/image";
import Button from "@/components/reusable/buttons/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { TwoColImage, TwoColText } from "@/components/reusable/two-cols-comps";

const StoriesSection = () => {
  return (
    <Header2cols direction="rightToLeft" headerType="sub">
      <TwoColImage
        alt="Desk with a laptop open on it surrounded by a mobile phone and some books"
        desktopSrc={storiesImgDesk}
        mobileSrc={storiesImgMob}
        tabletSrc={storiesImgTab}
      />
      <TwoColText>
        <Heading theme="light">BEAUTIFUL STORIES EVERY TIME</Heading>
        <BaseText theme="light" className="mt-4">
          We provide design templates to ensure your stories look terrific.
          Easily add photos, text, embed maps and media from other networks.
          Then share your story with everyone.
        </BaseText>
        <Button buttonType="primary" theme="primaryLight" className="mt-6">
          VIEW THE STORIES <ArrowIcon stroke="#000" />
        </Button>
      </TwoColText>
    </Header2cols>
  );
};

export default StoriesSection;
