import { Header2cols } from "@/components/reusable";
import { Heading, BaseText } from "@/components/reusable/text";
import Button from "@/components/reusable/buttons/Button";
import Image from "next/image";
import { mainHeaderImgMob } from "../../../public/assets/home";
import ArrowIcon from "@/components/icons/ArrowIcon";

const MainHeader = () => {
  return (
    <Header2cols
      className="w-full col-start-1 col-end-13"
      direction="leftToRight"
      headerType="main"
    >
      <Image
        priority
        src={mainHeaderImgMob}
        alt="Man standing on end of a dock looking out over a misty lake with his arms down by his side holding camera."
      />
      <div className="px-6 py-[72px]">
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
      </div>
    </Header2cols>
  );
};

export default MainHeader;
