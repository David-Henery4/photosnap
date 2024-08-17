import { Header2cols } from "@/components/reusable";
import { Heading, BaseText } from "@/components/reusable/text";
import Button from "@/components/reusable/buttons/Button";
import {
  mainHeaderImgTab,
  mainHeaderImgDesk,
  mainHeaderImgMobLg,
  mainHeaderImgTabLg,
} from "../../../public/assets/home";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { TwoColImage, TwoColText } from "@/components/reusable/two-cols-comps";
import Image from "next/image";

const MainHeader = () => {
  return (
    <Header2cols direction="leftToRight" headerType="main">
      {/* <Image src={mainHeaderImgMobLg} className="mdTab:hidden"/> */}
      {/* <Image src={mainHeaderImgTab} className="hidden mdTab:block"/> */}
      <TwoColImage
        alt="Man standing on end of a dock looking out over a misty lake with his arms down by his side holding camera."
        mobileSrc={mainHeaderImgMobLg}
        tabletSrc={mainHeaderImgTabLg}
        desktopSrc={mainHeaderImgDesk}
      />
      <TwoColText>
        <Heading theme="dark" className="uppercase">
          Create and share your photo stories.
        </Heading>
        <BaseText theme="dark" className="mt-4">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </BaseText>
        <Button className="mt-6" buttonType="primary" theme="primaryDark">
          GET AN INVITE
          <ArrowIcon stroke="#fff" />
        </Button>
      </TwoColText>
    </Header2cols>
  );
};

export default MainHeader;
