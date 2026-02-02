import HeroSection from "./components/HeroSection";
import PartnerSection from "./components/PartnerSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import NewsSection from "./components/NewsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PartnerSection />
      <AboutSection />
      <GallerySection />
      <NewsSection />
    </main>
  );
}
