import {
  MainHeader,
  StoriesSection,
  DesignSection,
  GallerySection,
  FeaturesSection
} from "@/sections/home";

export default function Home() {
  return (
    <>
      <MainHeader />
      <main className="w-full col-start-1 col-end-13">
        <StoriesSection />
        <DesignSection />
        <GallerySection />
        <FeaturesSection/>
      </main>
    </>
  );
}
