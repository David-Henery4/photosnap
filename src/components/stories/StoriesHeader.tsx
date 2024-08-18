import { Heading, FourthHeading, BaseText } from "../reusable/text";
import Image from "next/image";
import { moonOfAppalaciaImgMob } from "../../../public/assets/stories/mobile";
import Button from "../reusable/buttons/Button";
import ArrowIcon from "../icons/ArrowIcon";

const StoriesHeader = () => {
  return (
    <header className="w-full col-start-1 col-end-13 bg-black">
      <Image
        src={moonOfAppalaciaImgMob}
        alt="A misty forest with mountains in Appalachia at night with clear skies and a full moon"
        priority={true}
        quality={100}
        className="object-cover object-center"
      />
      <div className="w-full px-6 py-12">
        <div className="grid gap-4">
          <FourthHeading theme="dark">
            LAST MONTH’S FEATURED STORY
          </FourthHeading>
          <Heading theme="dark">HAZY FULL MOON OF APPALACHIA</Heading>
          <div className="flex justify-start items-center text-[13px] gap-2">
            <p className="text-white/75">March 2nd 2020</p>
            <p className="text-white ">by John Appleseed</p>
          </div>
        </div>
        <div className="w-full mt-6">
          <BaseText theme="dark">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &quot;mountains,&quot; especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </BaseText>
          <Button buttonType="primary" theme="primaryDark" className="uppercase mt-6">
            Read the story
            <ArrowIcon stroke="#fff"/>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StoriesHeader;
