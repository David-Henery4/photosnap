import StoriesHeader from "@/components/stories/StoriesHeader"
import { GalleryGrid } from "@/components/reusable"
import { GalleryCard } from "@/components/reusable/cards"
import galleryData from "@/localData/galleryData"

const page = () => {
  return (
    <>
      <StoriesHeader/>
      <main className="w-full col-start-1 col-end-13">
        <GalleryGrid>
          {galleryData.map((galleryItem) => {
            return <GalleryCard key={galleryItem.id} {...galleryItem}/>
          })}
        </GalleryGrid>
      </main>
    </>
  )
}

export default page