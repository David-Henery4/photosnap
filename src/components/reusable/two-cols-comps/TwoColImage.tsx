import { getImageProps } from "next/image";
import ColumnImgTypes from "@/types/colImgTypes";

const TwoColImage = ({
  desktopSrc,
  mobileSrc,
  tabletSrc,
  alt,
}: ColumnImgTypes) => {
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    quality: 100,
    src: desktopSrc,
    alt,
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    quality: 100,
    src: tabletSrc,
    alt,
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    quality: 100,
    src: mobileSrc,
    alt,
  });
  //
  return (
    <div className="mdTab:flex-[2] mdTab:h-full mdDesk:flex-[4]">
      <picture className="">
        <source media="(min-width: 68.75em)" srcSet={desktop} />
        <source media="(min-width: 41.25em)" srcSet={tablet} />
        <img
          {...rest}
          className="w-full object-cover object-center max-h-[380px] mdTab:max-h-none mdTab:h-full"
          srcSet={mobile}
          src={mobile}
          alt={alt}
        />
      </picture>
    </div>
  );
};

export default TwoColImage;
