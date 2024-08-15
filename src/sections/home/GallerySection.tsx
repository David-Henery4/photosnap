import { GalleryGrid } from "@/components/reusable"
import { GalleryCard } from "@/components/reusable/cards"
import galleryData from "@/localData/galleryData"
import GalleryCardTypes from "@/types/galleryCardTypes"

const GallerySection = () => {
  const galleryArrayData: GalleryCardTypes[] = galleryData.slice(0,4)
  return (
    <GalleryGrid>
      {galleryArrayData.map((data) => {
        return <GalleryCard key={data.id} {...data}/>;
      })}
    </GalleryGrid>
  );
}

export default GallerySection