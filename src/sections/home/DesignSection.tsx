import { Header2cols } from "@/components/reusable";
import { Heading, BaseText } from "@/components/reusable/text";
import { designImgMob } from "../../../public/assets/home";
import Button from "@/components/reusable/buttons/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Image from "next/image";

const DesignSection = () => {
  return (
    <Header2cols direction="leftToRight" headerType="sub">
      <Image
        src={designImgMob}
        alt="Man in center of image, with a pitch black background, adjusting a high tech camera."
      />
      <div className="px-6 py-[72px]">
        <Heading theme="light">DESIGNED FOR EVERYONE</Heading>
        <BaseText theme="light" className="mt-4">
          Photosnap can help you create stories that resonate with your
          audience. Our tool is designed for photographers of all levels,
          brands, businesses you name it.
        </BaseText>
        <Button buttonType="primary" theme="primaryLight" className="mt-6">
          VIEW THE STORIES
          <ArrowIcon stroke="#000"/>
        </Button>
      </div>
    </Header2cols>
  );
};

export default DesignSection;
