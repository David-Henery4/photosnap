import { StaticImageData } from "next/image";

interface GalleryCardTypes {
  title: string;
  author: string;
  hrefSrc: string;
  imgSrcMobile: StaticImageData;
  imgSrcDesktop: StaticImageData;
  id: number
}

export default GalleryCardTypes