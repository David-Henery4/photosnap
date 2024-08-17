import Image from "next/image";
import GalleryCardTypes from "@/types/galleryCardTypes";
import { ThirdHeading } from "../text";
import Button from "../buttons/Button";
import ArrowIcon from "@/components/icons/ArrowIcon";

const GalleryCard = ({
  author,
  hrefSrc,
  title,
  imgSrcDesktop,
  imgSrcMobile,
}: GalleryCardTypes) => {
  return (
    <div className="px-6 pt-[236px] pb-10 relative smMob:pt-[361px] md2Tab:px-10">
      {/* Create alt later */}
      <Image
        className="absolute top-0 left-0 h-full w-full object-center-top object-cover"
        src={imgSrcDesktop}
        alt=""
        quality={100}
        loading="lazy"
        // width={7200}
        // height={7200}
        fill={true}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/0 to-black/65"></div>
      <div className="relative z-10">
        <div>
          <ThirdHeading theme="dark">{title}</ThirdHeading>
          <p className="text-white">by {author}</p>
        </div>
        <div className="w-full h-[1px] bg-white/25 mb-5 mt-4"></div>
        <Button
          className="justify-between w-full"
          buttonType="primary"
          theme="primaryDark"
        >
          READ STORY
          <ArrowIcon stroke="#fff" />
        </Button>
      </div>
    </div>
  );
};

export default GalleryCard;
