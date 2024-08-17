import { StaticImageData } from "next/image"

interface ColumnImgTypes {
  desktopSrc: StaticImageData,
  tabletSrc: StaticImageData,
  mobileSrc: StaticImageData,
  alt: string
}

export default ColumnImgTypes