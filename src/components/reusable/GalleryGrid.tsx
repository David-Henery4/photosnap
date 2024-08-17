import { PropsWithChildren } from "react";

const GalleryGrid = ({children}:PropsWithChildren) => {
  return <section className="grid mob:grid-cols-gallery2Cols">{children}</section>;
};

export default GalleryGrid;
