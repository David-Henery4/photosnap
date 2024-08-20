import { Heading, FourthHeading, BaseText } from "../reusable/text";
import Image from "next/image";
import {moonOfAppalaciaImgTabLg } from "../../../public/assets/stories/tablet";
import { moonOfAppalaciaImgDeskLg, moonOfAppalaciaImgDesk } from "../../../public/assets/stories/desktop";
import Button from "../reusable/buttons/Button";
import ArrowIcon from "../icons/ArrowIcon";

const StoriesHeader = () => {
  return (
    <header className="w-full col-start-1 col-end-13 bg-black xSmTab:grid xSmTab:grid-cols-overallMob md2Tab:grid-cols-overallTab desk:grid-cols-overallDesk">
      <div className="w-full relative xSmTab:col-start-1 xSmTab:col-end-13 xSmTab:row-start-1 xSmTab:row-end-2">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-black/65"></div>
        <Image
          src={moonOfAppalaciaImgTabLg}
          alt="A misty forest with mountains in Appalachia at night with clear skies and a full moon"
          priority={true}
          quality={100}
          className="w-full object-cover object-center xSmTab:h-full xSmTab:max-h-[650px] smLap:hidden"
        />
        <Image
          src={moonOfAppalaciaImgDeskLg}
          alt="A misty forest with mountains in Appalachia at night with clear skies and a full moon"
          priority={true}
          quality={100}
          className="hidden w-full object-cover object-center xSmTab:h-full xSmTab:max-h-[650px] smLap:block"
        />
      </div>
      <div className="w-full px-6 py-12 z-10 max-w-[387px] xSmTab:col-start-2 xSmTab:col-end-12 xSmTab:row-start-1 xSmTab:row-end-2 xSmTab:px-0 xSmTab:py-[122px] xSmTab:self-center">
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
            mountains, is popularly called &quot;mountains,&quot; especially in
            eastern Kentucky and West Virginia, and while the ridges are not
            high, the terrain is extremely rugged.
          </BaseText>
          <Button
            buttonType="primary"
            theme="primaryDark"
            className="uppercase mt-6"
          >
            Read the story
            <ArrowIcon stroke="#fff" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StoriesHeader;
